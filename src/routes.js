import Page404 from "./pages/Page404";
import BookingTicket from "./pages/bookingticket/BookingTicket";
import BuySnack from "./pages/bookingticket/BuySnack";
import Film from "./pages/film/Film";
import TabFilm from "./pages/film/TabFilm";
import HomePage from "./pages/home/homepage";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import ShowTimes from "./pages/showtimes/ShowTimes";
import SignIn from "./pages/user/signin";
import SignUp from "./pages/user/signup";
import UpdateInFo from "./pages/user/updateif";

const routes = [
  {
    path: "/",
    element: <WebsiteLayout />,
    errorElement: <Page404 />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/updateinfo", element: <UpdateInFo /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/film",
        element: <Film />,
      },
      { path: "/showtimes", element: <ShowTimes /> },
      { path: "/bookingticket", element: <BookingTicket /> },
      { path: "/buyingsnack", element: <BuySnack /> },
    ],
  },
];

export default routes;
