'use strict';

let leftMenuApi = {};

leftMenuApi.init = (Drawer) => {
    this.leftMenuHandler = Drawer;
};

leftMenuApi.openDrawer = () => {
    this.leftMenuHandler.openDrawer();
};

leftMenuApi.closeDrawer = () => {
    this.leftMenuHandler.closeDrawer();
}

module.exports = leftMenuApi;