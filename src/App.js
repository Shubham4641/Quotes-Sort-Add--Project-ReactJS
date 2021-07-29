import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import AllQuote from './pages/AllQuotes';
// import NewQuote from './pages/NewQuote';
// import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
// import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote  = React.lazy(() => import ('./pages/NewQuote'));

const QuoteDetail = React.lazy(() => import ('./pages/QuoteDetail'));

const NotFound = React.lazy(() => import ('./pages/NotFound'));
const AllQuote = React.lazy(() => import ('./pages/AllQuotes'));


function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback= {<div className = 'centered'> <LoadingSpinner/></div>}>
          <Switch>
            <Route path='/' exact>
              <Redirect to="quotes" />
            </Route>

            <Route path="/quotes" exact>
              <AllQuote />
            </Route>

            <Route path="/quotes/:quoteId">
              <QuoteDetail />
            </Route>

            <Route path="/new-quote">
              <NewQuote />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>


          </Switch>
        </Suspense>
      </Layout>

    </div>
  );
}

export default App;
