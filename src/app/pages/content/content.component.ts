import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private id: string | null = "";
  photoCover = "";
  contentTitle = "";
  contentDescription = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      if (this.id) {
        this.setValueToComponent(this.id);
      }
    });
  }

  setValueToComponent(id: string): void {
    const result = dataFake.find(article => article.id === id);
    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
    } else {
      console.error("Artigo não encontrado com ID:", id);
    }
  }
}
