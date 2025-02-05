import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';


//para Data Picker
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
//para hora importante
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatPaginator,
        MatPaginatorModule,
        MatSortModule,
        MatSort,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        NgxMaterialTimepickerModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        LayoutModule,
        

    ],
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatPaginator,
        MatPaginatorModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        NgxMaterialTimepickerModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        LayoutModule,
        

    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'es-PE' }
    ]
})
export class MaterialModule { }
