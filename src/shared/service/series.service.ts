import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../model/series.model';
import { map } from 'rxjs/operators';
import { Model } from '../model/model.model';
import { Accessory } from '../model/accessory.model';
import { Color } from '../model/color.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class SeriesService {
  private rootParentUrl = "http://localhost:8081";

  constructor(private http:HttpClient) {



   }

   getSeries(): Observable<Series[]>{
    return this.http.get<Series[]>(this.rootParentUrl+"/seriestask")
        .pipe  (map((response: Series[]) => {
            
          return response;
        })
      );
    }
  
    getModel(): Observable<Model[]>{
      return this.http.get<Model[]>(this.rootParentUrl+"/modeltask")
          .pipe  (map((response: Model[]) => {
              
            return response;
          })
        );
      }
      getAccessory(): Observable<Accessory[]>{
        return this.http.get<Accessory[]>(this.rootParentUrl+"/accessorytask")
            .pipe  (map((response: Accessory[]) => {
                
              return response;
            })
          );
        }
        getColor(): Observable<Color[]>{
          return this.http.get<Color[]>(this.rootParentUrl+"/colortask")
              .pipe  (map((response: Color[]) => {
                  
                return response;
              })
            );
          }



}
