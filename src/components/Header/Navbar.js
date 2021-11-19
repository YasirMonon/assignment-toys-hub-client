import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";


import classes from "./Navbar.module.css";
import ToyButton from "../ToyButton/ToyButton";
import logo from "../../images/logo-white.png";
import useFirebase from "../../hooks/useFirebase";

const NavbarMenu = () => {
  const { user, logout } = useContext(AuthContext);
  const { admin } = useFirebase();
  const history = useHistory();

  const handleDashboardLink = () => {
    if (admin === true) {
      history.push("/dashboardAd");
    }
    else if (!admin === true) {
      history.push("/dashboardUser");
    }
  }
  return (
    <>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={`${classes.navbar} navbar-dark`}
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className={classes.logoContainer}>
              <span>Toys <img src={logo} alt="logo" /> Hub</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className={`ms-auto ${classes.navLinkContainer} align-items-center`}
              >
                <Nav.Link
                  eventKey="1"
                  exact
                  as={NavLink}
                  to="/"
                  activeClassName={classes.active}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  eventKey="2"
                  as={NavLink}
                  to="/explore"
                  activeClassName={classes.active}
                >
                  Explore
                </Nav.Link>
                {/* If user logged in then this link will show */}
                {user.email ? (
                  <>

                    {/* <Nav.Link
                    eventKey="3"
                    as={NavLink}
                    to="/dashboard"
                    activeClassName={classes.active}
                  >
                    Dashboard
                  </Nav.Link> */}

                    {admin ?
                      (
                        <Nav.Link
                          eventKey="3"
                          as={NavLink}
                          to="/dashboardAd"
                          activeClassName={classes.active}
                        >
                          Admin Dashboard
                        </Nav.Link>)
                      :

                      (<Nav.Link
                        eventKey="4"
                        as={NavLink}
                        to="/dashboardUser"
                        activeClassName={classes.active}
                      >
                        User Dashboard
                      </Nav.Link>
                      )}



                    <ToyButton color="green" onClick={logout}>
                      {user.email && user.displayName}, Logout
                    </ToyButton>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzY3OWNjMSI+PHBhdGggZD0iTTg1LjAzMjUsNi44OGMtMi4xNjM0NCwwIC00LjI4NjU2LDAuMDUzNzUgLTYuMzQyNSwwLjIxNWMtMC4yNTUzMSwwLjAxMzQ0IC0wLjQ5NzE5LDAuMDgwNjMgLTAuNzUyNSwwLjEwNzVjLTEuODAwNjIsMC4xNjEyNSAtMy41NjA5NCwwLjM3NjI1IC01LjI2NzUsMC42NDVjLTEuODI3NSwwLjI5NTYzIC0zLjY1NSwwLjY0NSAtNS4zNzUsMS4wNzVjLTAuMDgwNjIsMC4wMTM0NCAtMC4xNDc4MSwwLjA5NDA2IC0wLjIxNSwwLjEwNzVjLTMuNjI4MTIsMC45MjcxOSAtNi45ODc1LDIuMTUgLTEwLjEwNSwzLjY1NWMtMy4xNDQzNywxLjUxODQ0IC01Ljk5MzEyLDMuMzg2MjUgLTguNiw1LjQ4MjVjLTEuMjksMS4wNDgxMyAtMi40OTkzNywyLjE1IC0zLjY1NSwzLjMzMjVjLTQuNTY4NzUsNC42NzYyNSAtOC4wMjIxOSwxMC4zNDY4OCAtMTAuMzIsMTcuMDkyNWMtMC41NTA5NCwxLjYyNTk0IC0xLjA4ODQ0LDMuMzA1NjMgLTEuNTA1LDUuMDUyNWMtMC4zNzYyNSwxLjU1ODc1IC0wLjY5ODc1LDMuMTk4MTMgLTAuOTY3NSw0LjgzNzVjLTAuMTc0NjksMS4wNjE1NiAtMC4zMDkwNiwyLjEzNjU2IC0wLjQzLDMuMjI1Yy0wLjA5NDA2LDAuODczNDQgLTAuMjU1MzEsMS42Nzk2OSAtMC4zMjI1LDIuNThjLTAuMTYxMjUsMi4wMjkwNiAtMC4yMTUsNC4xMTE4OCAtMC4yMTUsNi4yMzVjMCwxLjc0Njg4IDAuMzA5MDYsMy45NjQwNiAwLjY0NSw2LjM0MjVjMC4zNjI4MSwyLjU2NjU2IDAuODg2ODgsNS4zNDgxMyAxLjUwNSw4LjE3YzAuNTUwOTQsMi41MjYyNSAxLjA4ODQ0LDQuOTcxODggMS43Miw3LjMxYzAuMDY3MTksMC4yNjg3NSAwLjE0NzgxLDAuNTkxMjUgMC4yMTUsMC44NmMwLjQzLDEuNTQ1MzEgMC44NzM0NCwzLjEwNDA2IDEuMjksNC40MDc1Yy0xLjAwNzgxLDAuODYgLTIuMDI5MDYsMS40MTA5NCAtMy4wMSwyLjkwMjVjLTEuNjUyODEsMi41MjYyNSAtMi44NjIxOSw2LjA2MDMxIC0yLjM2NSwxMC4zMmMxLjQ1MTI1LDEyLjI5NTMxIDkuMTY0MzgsMTYuNjg5MzggMTEuNzE3NSwxNy45NTI1YzAuOTgwOTQsNS43NTEyNSAzLjk1MDYzLDEyLjg0NjI1IDguODE1LDIwLjEwMjVjNS4yMTM3NSw3Ljc4MDMxIDEyLjQxNjI1LDE1LjI1MTU2IDIxLjE3NzUsMTkuNDU3NWMwLjE2MTI1LDAuMDgwNjMgMC4yNjg3NSwwLjI0MTg4IDAuNDMsMC4zMjI1YzMuMTU3ODEsMy43NzU5NCA3LjYxOTA2LDYuNDUgMTIuOSw2LjQ1YzUuMjgwOTQsMCA5Ljc0MjE5LC0yLjY3NDA2IDEyLjksLTYuNDVjMC4xNjEyNSwtMC4wODA2MiAwLjI2ODc1LC0wLjI0MTg3IDAuNDMsLTAuMzIyNWM4LjczNDM4LC00LjIxOTM3IDE1Ljc4OTA2LC0xMS42NzcxOSAyMC45NjI1LC0xOS40NTc1YzQuODEwNjMsLTcuMjQyODEgNy43MjY1NiwtMTQuMzc4MTIgOC43MDc1LC0yMC4xMDI1YzIuNTI2MjUsLTEuMTk1OTQgMTAuNDY3ODEsLTUuNDY5MDYgMTEuOTMyNSwtMTcuODQ1YzAuNDk3MTksLTQuMjczMTIgLTAuODA2MjUsLTcuODg3ODEgLTIuNDcyNSwtMTAuNDI3NWMtMC45OTQzNywtMS41MDUgLTIuMDAyMTksLTIuMDI5MDYgLTMuMDEsLTIuOTAyNWMwLjU2NDM4LC0xLjc4NzE5IDEuMjM2MjUsLTMuODAyODEgMS44Mjc1LC02LjAyYzAuMDQwMzEsLTAuMTM0MzcgMC4wNjcxOSwtMC4yOTU2MiAwLjEwNzUsLTAuNDNjMC4wNjcxOSwtMC4yMjg0NCAwLjE0NzgxLC0wLjUxMDYyIDAuMjE1LC0wLjc1MjVjMC42MTgxMywtMi40MTg3NSAxLjA0ODEzLC00Ljc1Njg3IDEuNTA1LC03LjA5NWMwLjUyNDA2LC0yLjcwMDk0IDAuOTk0MzgsLTUuMzYxNTYgMS4yOSwtNy45NTVjMC4wOTQwNiwtMC43NTI1IDAuMTQ3ODEsLTEuNTE4NDQgMC4yMTUsLTIuMjU3NWMwLjEzNDM4LC0xLjM1NzE5IDAuMjU1MzEsLTIuNjg3NSAwLjMyMjUsLTQuMDg1YzAuMDY3MTksLTEuMzQzNzUgMC4xMDc1LC0yLjY2MDYyIDAuMTA3NSwtMy45Nzc1YzAsLTAuOTI3MTkgLTAuMDQwMzEsLTEuOTg4NzUgLTAuMTA3NSwtMy4wMWMtMC4wMTM0NCwtMC4xNDc4MSAwLjAxMzQ0LC0wLjI4MjE5IDAsLTAuNDNjLTAuMDY3MTksLTAuODQ2NTYgLTAuMjE1LC0xLjY3OTY5IC0wLjMyMjUsLTIuNThjLTAuMDY3MTksLTAuNDk3MTkgLTAuMTM0MzcsLTEuMDA3ODEgLTAuMjE1LC0xLjUwNWMtMC4wODA2MiwtMC40OTcxOSAtMC4xMjA5NCwtMC45OTQzNyAtMC4yMTUsLTEuNTA1Yy0wLjA4MDYyLC0wLjQwMzEyIC0wLjEyMDk0LC0wLjc3OTM3IC0wLjIxNSwtMS4xODI1Yy0wLjEyMDk0LC0wLjU2NDM3IC0wLjI4MjE5LC0xLjE1NTYyIC0wLjQzLC0xLjcyYy0wLjA5NDA2LC0wLjM2MjgxIC0wLjIxNSwtMC43MjU2MiAtMC4zMjI1LC0xLjA3NWMtMC4xNzQ2OSwtMC42MDQ2OSAtMC4zMzU5NCwtMS4yMjI4MSAtMC41Mzc1LC0xLjgyNzVjLTAuMTA3NSwtMC4zMzU5NCAtMC4yMDE1NiwtMC42NDUgLTAuMzIyNSwtMC45Njc1Yy0wLjIxNSwtMC41Nzc4MSAtMC41MTA2MiwtMS4xNDIxOSAtMC43NTI1LC0xLjcyYy0wLjM4OTY5LC0wLjkxMzc1IC0wLjgxOTY5LC0xLjgwMDYyIC0xLjI5LC0yLjY4NzVjLTAuMTg4MTIsLTAuMzYyODEgLTAuMzM1OTQsLTAuNzI1NjIgLTAuNTM3NSwtMS4wNzVjLTAuMjY4NzUsLTAuNDgzNzUgLTAuNjU4NDQsLTAuOTI3MTkgLTAuOTY3NSwtMS4zOTc1Yy0wLjIyODQ0LC0wLjM0OTM3IC0wLjQwMzEyLC0wLjczOTA2IC0wLjY0NSwtMS4wNzVjLTAuMzIyNSwtMC40NDM0NCAtMC42MTgxMiwtMC44NzM0NCAtMC45Njc1LC0xLjI5Yy0wLjI2ODc1LC0wLjMzNTk0IC0wLjU3NzgxLC0wLjY0NSAtMC44NiwtMC45Njc1Yy0wLjM0OTM3LC0wLjM4OTY5IC0wLjY5ODc1LC0wLjgxOTY5IC0xLjA3NSwtMS4xODI1Yy0wLjM0OTM3LC0wLjM0OTM3IC0wLjcxMjE5LC0wLjYzMTU2IC0xLjA3NSwtMC45Njc1Yy0wLjczOTA2LC0wLjY3MTg3IC0xLjU0NTMxLC0xLjI0OTY5IC0yLjM2NSwtMS44Mjc1Yy0zLjQyNjU2LC0yLjQwNTMxIC03LjUxMTU2LC0zLjk3NzUgLTEyLjM2MjUsLTQuM2MtMC45NDA2MiwtMS4zODQwNiAtMi40MTg3NSwtMy4xNDQzNyAtNC40MDc1LC00Ljk0NWMtMC43NzkzNywtMC43MTIxOSAtMS42MTI1LC0xLjQ1MTI1IC0yLjU4LC0yLjE1Yy0wLjEwNzUsLTAuMDgwNjIgLTAuMjE1LC0wLjEzNDM3IC0wLjMyMjUsLTAuMjE1Yy0wLjEwNzUsLTAuMDY3MTkgLTAuMjE1LC0wLjE0NzgxIC0wLjMyMjUsLTAuMjE1Yy0wLjk1NDA2LC0wLjY0NSAtMS45ODg3NSwtMS4yMzYyNSAtMy4xMTc1LC0xLjgyNzVjLTMuNDY2ODcsLTEuODI3NSAtNy43MTMxMiwtMy4zOTk2OSAtMTMuMTE1LC00LjA4NWMtMC4yNDE4NywtMC4wMjY4NyAtMC40OTcxOSwtMC4wODA2MiAtMC43NTI1LC0wLjEwNzVjLTAuMjAxNTYsLTAuMDI2ODcgLTAuNDQzNDQsMC4wMjY4OCAtMC42NDUsMGMtMS42MjU5NCwtMC4xNjEyNSAtMy4zNDU5NCwtMC4zMjI1IC01LjE2LC0wLjMyMjV6TTExMS44LDQ5LjQ1YzMuMzQ1OTQsNS4zMzQ2OSA4LjYsMTUuNDM5NjkgOC42LDI2LjIzYzAuMDY3MTksNS43Mzc4MSAyLjI4NDM4LDE1LjI5MTg4IDkuOTk3NSwxNi4yMzI1YzAuNjg1MzEsMC41MTA2MyAxLjU5OTA2LDEuMzAzNDQgMi4zNjUsMi40NzI1YzAuOTU0MDYsMS40NjQ2OSAxLjU5OTA2LDMuMjI1IDEuMjksNS44MDVjLTEuMzE2ODcsMTEuMDg1OTQgLTkuMDMsMTMuMjIyNSAtOS4wMywxMy4yMjI1Yy0xLjI5LDAuNDE2NTYgLTIuMjE3MTksMS41NTg3NSAtMi4zNjUsMi45MDI1Yy0wLjQwMzEyLDMuODAyODEgLTMuMjc4NzUsMTEuNTE1OTQgLTguMDYyNSwxOC43MDVjLTQuNzgzNzUsNy4xODkwNiAtMTEuMzU0NjksMTQuMDQyMTkgLTE4LjU5NzUsMTcuNDE1Yy0wLjU2NDM3LDAuMjU1MzEgLTEuMDQ4MTIsMC42NzE4OCAtMS4zOTc1LDEuMTgyNWMtMS44NTQzNywyLjc2ODEzIC00Ljk5ODc1LDQuNjIyNSAtOC42LDQuNjIyNWMtMy42MDEyNSwwIC02Ljc0NTYyLC0xLjg1NDM3IC04LjYsLTQuNjIyNWMtMC4zNDkzNywtMC41MTA2MiAtMC44MzMxMiwtMC45MjcxOSAtMS4zOTc1LC0xLjE4MjVjLTcuMjY5NjksLTMuMzcyODEgLTEzLjg4MDk0LC0xMC4yMjU5NCAtMTguNzA1LC0xNy40MTVjLTQuODI0MDYsLTcuMTg5MDYgLTcuNzgwMzEsLTE0LjkxNTYyIC04LjE3LC0xOC43MDVjLTAuMTYxMjUsLTEuMjc2NTYgLTEuMDM0NjksLTIuMzY1IC0yLjI1NzUsLTIuNzk1YzAsMCAtNy43MjY1NiwtMi4zMjQ2OSAtOS4wMywtMTMuNDM3NWMtMC4zMDkwNiwtMi41OTM0NCAwLjM0OTM4LC00LjM4MDYyIDEuMjksLTUuODA1YzAuMzg5NjksLTAuNTkxMjUgMC44NiwtMS4wNzUgMS4yOSwtMS41MDVjMC4yNjg3NSwwLjA2NzE5IDAuNTc3ODEsMC4xMDc1IDAuODYsMC4xMDc1YzYuNzg1OTQsMCA5LjEzNzUsLTExLjMwMDk0IDEwLjMyLC0xNy4yYzIuMTUsLTEwLjczNjU2IDEzLjk3NSwtMTMuNzYgMzAuOTYsLTEzLjc2YzE2LjAwNDA2LDAgMjQuOTkzNzUsLTcuNDMwOTQgMjkuMjQsLTEyLjQ3ek02Ny4wOCw5Mi44OGMtMi44NDg3NSwwIC01LjE2LDIuMzExMjUgLTUuMTYsNS4xNmMwLDIuODQ4NzUgMi4zMTEyNSw1LjE2IDUuMTYsNS4xNmMyLjg0ODc1LDAgNS4xNiwtMi4zMTEyNSA1LjE2LC01LjE2YzAsLTIuODQ4NzUgLTIuMzExMjUsLTUuMTYgLTUuMTYsLTUuMTZ6TTEwNC45Miw5Mi44OGMtMi44NDg3NSwwIC01LjE2LDIuMzExMjUgLTUuMTYsNS4xNmMwLDIuODQ4NzUgMi4zMTEyNSw1LjE2IDUuMTYsNS4xNmMyLjg0ODc1LDAgNS4xNiwtMi4zMTEyNSA1LjE2LC01LjE2YzAsLTIuODQ4NzUgLTIuMzExMjUsLTUuMTYgLTUuMTYsLTUuMTZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                      alt={user.displayName}
                      className={classes.userImg}
                    />
                    {/* 
                  {user.photoURL && (
                    <img
                      src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png"
                      alt={user.displayName}
                      className={classes.userImg}
                    />
                  )} */}
                  </>
                ) : (
                  <ToyButton
                    onClick={() => history.push("/login")}
                    color="green"
                  >
                    Login
                  </ToyButton>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div >
    </>
  );
};

export default NavbarMenu;