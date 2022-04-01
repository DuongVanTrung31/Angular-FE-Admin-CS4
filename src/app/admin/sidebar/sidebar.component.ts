import { Component, OnInit } from '@angular/core';
import * as path from "path";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path : "customers",
    title : "Khách hàng",
    icon : "mdi mdi-account-multiple",
    class : ""
  },
  {
    path : "order",
    title : "Đơn hàng",
    icon : "mdi mdi-clipboard-text",
    class : ""
  },
  {
    path : "products",
    title : "Sản phẩm",
    icon : "mdi mdi-bulletin-board",
    class : ""
  },
  {
    path : "categories",
    title : "Loại sản phẩm",
    icon : "mdi mdi-playlist-plus",
    class : ""
  },
  {
    path : "review",
    title : "Đánh giá sản phẩm",
    icon : "mdi mdi-thumb-up",
    class : ""
  },
  {
    path : "dashboard",
    title : "Doanh thu",
    icon : "mdi mdi-cash-usd",
    class : ""
  },
  {
    path : "dashboard/topsell",
    title : "Sản phẩm bán chạy",
    icon : "mdi mdi-crown",
    class : ""
  },
]




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems ?: any[]
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
