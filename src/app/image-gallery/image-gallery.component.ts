import { Component } from '@angular/core';
interface Image {
  name: string;
  url: string;
} 

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  constructor() { }



  images: Image[] = [];
  selectedImage: Image | null = null;
  zoom = 1;

  handleFileInput(event: any) {
    const files = event.target.files;
    this.images = []; // Clear the existing images

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        const image: Image = {
          name: file.name,
          url: e.target.result
        };
        this.images.push(image);
      };

      reader.readAsDataURL(file);
    }
  }

  previewImage(image: Image) {
    this.selectedImage = image;
  }

  zoomIn() {
    this.zoom += 0.1;
  }

  zoomOut() {
    if (this.zoom > 0.1) {
      this.zoom -= 0.1;
    }
  }
}