import Home from './Pages/Home/home';
import Signin from './Pages/Signin/Signin';
import Landing from './Pages/Landing/Landing';
import SPR from './Pages/SPR/SPR'
import Register from './Pages/Register/Register';
import Header from './componets/Header/Header'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import AnimatedCursor from "react-animated-cursor"


// const httpLink = createHttpLink({ uri: '/graphql'})
const httpLink = createHttpLink({ uri: 'http://localhost:3001/graphql'})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache() })

function App() {
  return (
    <ApolloProvider client={client} >
      <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
        <Router>
          <Header />
          <Routes>
            <Route path= "/" element={<Landing/>}/>
            <Route path= "/register" element={<Register/>}/>
            <Route path= "/signin" element={<Signin/>}/>
            <Route path= "/home" element={<Home/>}/>
            <Route path= "/spr" element={<SPR/>}/>
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;