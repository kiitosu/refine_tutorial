import { Refine } from "@refinedev/core";
import {
  ThemedLayoutV2,
  ErrorComponent,
  RefineThemes,
  RefineSnackbarProvider,
  notificationProvider,
} from "@refinedev/mui";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import routerBindings, {
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { MuiInferencer } from "@refinedev/inferencer/mui";

const App;
Rect.FC = () => {
  return (
    <ThemeProvider theme={RefineThemes.Blue}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <BrowserRouter>
            <Refine
                routerProvider={routerBindings}
                dataProvider={dataProvider(
                    "https://api.fake-rest.refine.dev"
                )}
                notificationProvider={notificationProvider}
                resources={[
                    {
                        name: "blog_posts",
                        list:"/blog-posts",
                        show:"/blog-posts/show/:id",
                        create: "/blog-posts/create",
                        edit:"/blog-posts/edit/:id",
                    }
                ]}
                ooptions={{
                    syncWithLocation:true,
                    warnWhenUnsavedChanges: true,
                }}
        </BrowserRouter>
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
};
