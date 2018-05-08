import React from 'react';
import {BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import ButtonPagePro from './pages/pro/ButtonPage';
import CSSPage from './pages/CSSPage';
import TablePage from './pages/TablePage';
import BadgePage from './pages/BadgePage';
import BreadcrumbPage from './pages/BreadcrumbPage';
import FaPage from './pages/FaPage';
import ComponentsPage from './pages/ComponentsPage';
import ModalPage from './pages/ModalPage';
import AdvancedPage from './pages/AdvancedPage';
import ProgressPage from './pages/ProgressPage';
import InputPage from './pages/InputPage';
import InputPagePro from './pages/pro/InputPage';
import MediaPage from './pages/MediaPage';
import JumbotronPage from './pages/JumbotronPage';
import AlertPage from './pages/AlertPage';
import CardsPage from './pages/CardsPage';
import PaginationPage from './pages/PaginationPage';
import PopoverPage from './pages/PopoverPage';
import ListGroupPage from './pages/ListGroupPage';
import CarouselPage from './pages/CarouselPage';
import CollapsePage from './pages/CollapsePage';
import CollapsePagePro from './pages/pro/CollapsePage';
import TabsPage from './pages/TabsPage';
import TooltipsPage from './pages/TooltipsPage';
import FooterPage from './pages/FooterPage';
import MasksPage from './pages/MasksPage';
import DropdownPage from './pages/DropdownPage';
import VideoCarouselPage from './pages/VideoCarouselPage';
import HoverPage from './pages/HoverPage';
import SelectPage from './pages/pro/SelectPage';
import SideNavPage from './pages/pro/SideNavPage';
import DatePickerPage from './pages/pro/DatePickerPage';
import TimePickerPage from './pages/pro/TimePickerPage';
import FormsPage from './pages/FormsPage';
import ScrollSpyPage from './pages/ScrollSpyPage';
import ChartsPage from './pages/ChartsPage';
import StickyPage from './pages/pro/StickyPage';
import LightboxPage from './pages/pro/LightboxPage';
import ScrollBarPage from './pages/ScrollBarPage';
import MultiCarouselPage from './pages/pro/MultiCarouselPage';
import ThumbnailsCarousel from './pages/pro/ThumbnailsCarousel';
import DoubleNavigationPage from './pages/DoubleNavigationPage';
import SectionsPage from './pages/pro/sections/SectionsPage';
import TestimonialsPage from './pages/pro/sections/TestimonialsPage';
import TestimonialsMultiPage from './pages/pro/sections/TestimonialsMultiPage';
import AppPage from './pages/pro/sections/AppPage';
import ContactFormPage from './pages/pro/sections/ContactFormPage'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/css' component={CSSPage} />
        <Route exact path='/css/table' component={TablePage} />
        <Route exact path='/components' component={ComponentsPage} />
        <Route path='/components/badge' component={BadgePage} />
        <Route path='/components/breadcrumb' component={BreadcrumbPage} />
        <Route path='/components/media' component={MediaPage} />
        <Route path='/components/input' component={InputPage} />
        <Route path='/components/pro/input' component={InputPagePro} />
        <Route path='/components/alert' component={AlertPage} />
        <Route path='/components/dropdown' component={DropdownPage} />
        <Route path='/css/icons' component={FaPage} />
        <Route path='/css/jumbotron' component={JumbotronPage} />
        <Route path='/components/cards' component={CardsPage} />
        <Route path='/components/buttons' component={ButtonPage} />
        <Route path='/components/forms' component={FormsPage} />
        <Route path='/components/pro/buttons' component={ButtonPagePro} />
        <Route path='/components/progress' component={ProgressPage} />
        <Route path='/components/popover' component={PopoverPage} />
        <Route path='/components/pagination' component={PaginationPage} />
        <Route path='/components/list-group' component={ListGroupPage} />
        <Route path='/components/tabs' component={TabsPage} />
        <Route path='/components/tooltips' component={TooltipsPage} />
        <Route path='/components/footer' component={FooterPage} />
        <Route exact path='/advanced' component={AdvancedPage} />
        <Route path='/advanced/modal' component={ModalPage} />
        <Route path='/advanced/carousel' component={CarouselPage} />
        <Route path='/advanced/collapse' component={CollapsePage} />
        <Route path='/advanced/pro/collapse' component={CollapsePagePro} />
        <Route path='/advanced/videocarousel' component={VideoCarouselPage} />
        <Route path='/advanced/pro/sidenav' component={SideNavPage} />
        <Route path='/css/masks' component={MasksPage} />
        <Route path='/css/hover' component={HoverPage} />
        <Route path='/advanced/pro/select' component={SelectPage} />
        <Route path='/advanced/pro/datepicker' component={DatePickerPage} />
        <Route path='/advanced/pro/timepicker' component={TimePickerPage} />
        <Route path='/advanced/scrollspy' component={ScrollSpyPage} />
        <Route path='/advanced/videocarousel' component={VideoCarouselPage} />
        <Route path='/advanced/charts' component={ChartsPage} />
        <Route path='/advanced/sticky' component={StickyPage} />
        <Route path='/advanced/pro/lightbox' component={LightboxPage} />
        <Route path='/advanced/scrollbar' component={ScrollBarPage} />
        <Route path='/advanced/pro/multicarousel' component={MultiCarouselPage} />
        <Route path='/advanced/pro/thumbnailscarousel' component={ThumbnailsCarousel} />
        <Route path='/css/double' component={DoubleNavigationPage} />
        <Route path='/sections' component={SectionsPage} />
        <Route path='/pro/sections/testimonials' component={TestimonialsPage} />
        <Route path='/pro/sections/testimonialsMulti' component={TestimonialsMultiPage} />
        <Route path='/pro/sections/app' component={AppPage} />
        <Route path='/pro/sections/contactform' component={ContactFormPage} />
        <Route render = { function() {
          return <h1>Not Found</h1>;
        }} />
      </Switch>
    );
  }
}

export default Routes;
