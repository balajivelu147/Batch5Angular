import { SelectionModel } from '@angular/cdk/collections';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-left-nav-panel',
  templateUrl: './left-nav-panel.component.html',
  styleUrls: ['./left-nav-panel.component.scss']
})

export class LeftNavPanelComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  selection = new SelectionModel<PeriodicElement>(true, []);
  login: string = 'login';
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {}
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    return null;
  }

  isLoggedIn() {
    this.login = this.login === 'login' ? 'logout' : 'login';
    this.login === 'login' ? this.authService.logout() : this.authService.login();
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() : '';
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  // tslint:disable-next-line: member-ordering
  menu: NavItem[] = [
    {
      displayName: 'first page manual',
      iconName: 'desktop_windows',
      route: '/first-page-manual',
    },
    {
      displayName: 'reactive forms',
      iconName: 'ballot',
      route: '/reactive-forms',
    },
    {
      displayName: 'my first page',
      iconName: 'ballot',
      route: '/my-first-page',
    },
    {
      displayName: 'template driven',
      iconName: 'ballot',
      route: '/template-driven',
    },
    {
      displayName: 'Exams',
      iconName: 'description',
      children: [
        {
          displayName: 'UG',
          iconName: 'how_to_reg',
          route: '/exams/ug/2018'
        },
        {
          displayName: 'PG',
          iconName: 'waves',
          route: '/exams/pg'
        }
      ]
    },
    {
      displayName: 'Perfiles',
      iconName: 'group',
      children: [
        {
          displayName: 'Búsqueda Perfil',
          iconName: 'search',
          route: '/busquedaperfiles'
        }
      ]
    }
  ];
  // tslint:disable-next-line: member-ordering
  mobileQuery: MediaQueryList;

  // tslint:disable-next-line: member-ordering
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  // tslint:disable-next-line: member-ordering
  fillerContent = Array.from({ length: 50 }, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
 
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}
