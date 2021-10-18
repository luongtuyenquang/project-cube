import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route exact path='/product'>
                <ProductListPage />
            </Route>
            <Route exact path='/product/add'>
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