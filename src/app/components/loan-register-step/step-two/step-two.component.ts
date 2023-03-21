import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-step-two",
  templateUrl: "./step-two.component.html",
})
export class StepTwoComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  // cccdImage: string;
  // avatarImage: string;
  // cameraImage: string;

  // onFileSelected(event, type) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     if (type === 'cccd') {
  //       this.cccdImage = reader.result as string;
  //     } else if (type === 'avatar') {
  //       this.avatarImage = reader.result as string;
  //     }
  //   };
  // }

  // capture() {
  //   const video = document.createElement('video');
  //   navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
  //     video.srcObject = stream;
  //     video.play();
  //     const canvas = document.createElement('canvas');
  //     const context = canvas.getContext('2d');
  //     context.drawImage(video, 0, 0, 640, 480);
  //     this.cameraImage = canvas.toDataURL('image/jpeg');
  //     video.pause();
  //     stream.getTracks().forEach((track) => track.stop());
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  currentStep = 2;

  idCardPhotoPreviewUrl: string | null = null;
  selfiePhotoPreviewUrl: string | null = null;

  onIdCardPhotoChange(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.idCardPhotoPreviewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSelfiePhotoChange(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selfiePhotoPreviewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  nextStep() {
    this.currentStep += 1;
  }

  backStep() {
    this.currentStep -= 1;
  }
}


