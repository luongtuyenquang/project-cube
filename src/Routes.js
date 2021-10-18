import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/home'>
                <HomePage />
            </Route>
            <Route path='/product-list'>
                <ProductListPage />
            </Route>
            <Route path='/product/add'>
                <AddProductPage />
            </Route>
            <Route path='/product/:id/edit'>
                <AddProductPage />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}