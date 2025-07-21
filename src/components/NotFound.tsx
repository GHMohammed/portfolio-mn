import { Helmet } from "react-helmet-async";

const NotFound = () => (
  <>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className=" text-center mt-20">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  </>
);

export default NotFound;
