import 'bootstrap';

export class App {
  configureRouter(config, router) {
    config.title = 'Category and Products';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title:'Welcome' },
      { route: "categories", moduleId: "./categories/index", nav: true, title: "categories", name: "categories" }
    ]);

    this.router = router;
  }
  attached() {        
      $('.dropdown-toggle').dropdown()
  }
}
