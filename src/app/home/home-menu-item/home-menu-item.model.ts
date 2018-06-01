export class HomeMenuItem {
    public menuButtonTypeClass: string;
    public menuLink?: string;
    public menuButtonAction?: string;
    public menuIcon: string;
    public menuDescription: string;
    public isButton: boolean;

    constructor(menuButtonTypeClass: string, action: string, menuIcon: string, menuDescription: string, isButton: boolean) {
      this.menuButtonTypeClass = menuButtonTypeClass;
      this.menuIcon = menuIcon;
      this.menuDescription = menuDescription;
      isButton ? this.menuButtonAction = action : this.menuLink = action;
    }
  }
