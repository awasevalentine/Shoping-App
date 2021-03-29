import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  //slides = [{ 'image': 'https://gsr.dev/material2-carousel/assets/1.png_SkkusI8zO.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/phones-and-tablets.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/samsung web banner.jpg_Hkf-GtAxd.jpg' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }];
  slides = [
    "../../../../assets/carousel/fashion copy.png_HJxAH9qfu.jpeg",
    "../../../../assets/carousel/product 2.png_HyMHAKYfu.jpeg",
    "../../../../assets/carousel/samsung web banner.jpg_Hkf-GtAxd.jpg",
    "../../../../assets/carousel/S-1424x768_Mastercard_03-01.jpg",
    "../../../../assets/carousel/364774B2-E238-4351-A14D-4B1C64305257.gif"
  ]

  topDeals = [{ itemName: 'printer Ink', amount: 1200, image: "../../../../assets/top-deals/_1602039681.jpg" }, { itemName: 'Men Shirt', amount: 3500, image: "../../../../assets/top-deals/1(2).jpg" },
    { itemName: 'Unisex Sneakers', amount: 3500, image: "../../../../assets/top-deals/1(5).jpg" }, { itemName: 'Nokia 1101', amount: 7000, image: "../../../../assets/top-deals/1(7).jpg" }, { itemName: 'Tecno V1', amount: 16000, image: "../../../../assets/top-deals/118566_1577118961.jpg" },
    {itemName: '4 In One Gas Cooker', amount: 76000, image:  "../../../../assets/top-deals/cookers.png_ryemIRVHMO.png",}, {itemName: 'Wedding Ring', amount: 42000, image:  "../../../../assets/top-deals/158145_1580772681.jpg"}, {itemName: 'LG Home Thearter', amount: 19000, image:  "../../../../assets/top-deals/electronics(1).png"}
        
     //"../../../../assets/top-deals/connecting-people_web.jpg",  "../../../../assets/top-deals/Couples-Wedding-Ring-Set---Gold-7948380.jpg", 
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
