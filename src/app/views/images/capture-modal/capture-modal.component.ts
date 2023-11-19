import {Component, Inject} from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from "ngx-webcam";
import {Observable, Subject, tap} from "rxjs";
import {LoadingService} from "@app/services/loading/loading.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ImagenFacialService} from "@app/services/imagen-facial.service";
import {data} from "autoprefixer";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorDialogComponent} from "@components/dialog/dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-capture-modal',
  templateUrl: './capture-modal.component.html'
})
export class CaptureModalComponent {

  title = 'camaraapp';

  // Hacer Toogle on/off
  public mostrarWebcam = true;
  public permitirCambioCamara = true;
  public multiplesCamarasDisponibles = false;
  public dispositivoId!: string;
  public opcionesVideo: MediaTrackConstraints = {}

  // Errores al iniciar la cámara
  public errors: WebcamInitError[] = [];

  // Ultima captura o foto
  public imagenWebcam!: WebcamImage;

  // Cada Trigger para una nueva captura o foto
  public trigger: Subject<void> = new Subject<void>();

  // Cambiar a la siguiente o anterior cámara
  private siguienteWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  isEditImagen = false;

  constructor(private loadingService: LoadingService,
              private snackBar: MatSnackBar,
              private imagenFacialService: ImagenFacialService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<CaptureModalComponent>) {
    console.log(this.data, 'data')
  }

  public ngOnInit(): void {
    this.isEdit();
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multiplesCamarasDisponibles = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerCaptura(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.mostrarWebcam = !this.mostrarWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOnDeviceId: boolean | string): void {
    this.siguienteWebcam.next(directionOnDeviceId);
  }

  public handleImage(imagenWebcam: WebcamImage): void {
    console.info('Imagen de la webcam recibida: ', imagenWebcam);
    this.imagenWebcam = imagenWebcam;
  }

  public cameraSwitched(dispositivoId: string): void {
    console.log('Dispositivo Actual: ' + dispositivoId);
    this.dispositivoId = dispositivoId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.siguienteWebcam.asObservable();
  }

  handleSaveBtnClick() {
    if (this.imagenWebcam) {
      if (this.isEditImagen) {
        this.loadingService.setLoading(true);
        this.updateImagenFacial();
      } else {
        this.createImagenFacial();
      }
    }
  }

  isEdit(): void {
    this.loadingService.setLoading(true);
    this.isEditImagen = false;

    this.imagenFacialService.getImagenFacialById(this.data.allData.idciudadano)
      .pipe(
        tap(
          result => {
            this.loadingService.setLoading(false);
            this.isEditImagen = result.foto === null ? false : true;
          },
          error => {
            this.loadingService.setLoading(false);
            this.isEditImagen = false;
            console.log('No existe una imagen facial para este ciudadano.');
          }
        )
      )
      .subscribe();

    this.data.action === 'edit';
  }

  private updateImagenFacial() {
    const body = {
      foto: this.imagenWebcam.imageAsDataUrl,
      valida: true
    };

    this.imagenFacialService.updateImagenFacial(this.data.allData.idciudadano, body)
      .subscribe(
        () => {
          this.loadingService.setLoading(false);
          this.dialogRef.close(true);
          this.snackBar.open('Imagen facial modificada correctamente.', 'Cerrar', {
            duration: 5000
          });
        },
        (error) => {
          this.loadingService.setLoading(false);
          if (error instanceof HttpErrorResponse && error.status === 400) {
            // Maneja los errores personalizados del API
            const errorResponse = error.error;
            this.handleApiErrors(errorResponse);
          } else {
            console.error('Error al modificar imagen facial:', error);
            this.openErrorDialog('Error al modificar imagen facial', 'Ocurrió un error inesperado.');
          }
        }
      );
  }


  private createImagenFacial() {
    const body = {
      idciudadano: this.data.allData.idciudadano,
      foto: this.imagenWebcam.imageAsDataUrl,
      valida: true
    };
    this.imagenFacialService.createImagenFacial(body).subscribe(
      () => {
        this.dialogRef.close(true);
        this.snackBar.open('Imagen facial creada correctamente.', 'Cerrar', {
          duration: 5000
        });
      },
      (error) => {
        this.loadingService.setLoading(false);
        if (error instanceof HttpErrorResponse && error.status === 400) {
          // Maneja los errores personalizados del API
          const errorResponse = error.error;
          this.handleApiErrors(errorResponse);
        } else {
          console.error('Error al crear imagen facial:', error);
          this.openErrorDialog('Error al crear imagen facial', 'Ocurrió un error inesperado.');
        }

      }
    );
  }

  handleApiErrors(errorResponse: any): void {
    const errorMessages: any[] = [];
    for (const key in errorResponse) {
      if (errorResponse.hasOwnProperty(key)) {
        const errorMessagesForKey = errorResponse[key];
        errorMessagesForKey.forEach((errorMessage: string) => {
          errorMessages.push(`${key}: ${errorMessage}`);
        });
      }
    }

    const errorMessage = errorMessages.join('\n');
    this.openErrorDialog('Error al crear imagen facial ', errorMessage);
  }

  openErrorDialog(title: string, message: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      data: {title, message},
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes agregar más lógica si es necesario después de cerrar el diálogo de error.
    });
  }

}
