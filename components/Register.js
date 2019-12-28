import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";

const SIGNUP = gql`
  mutation signUp(
    $name: String!
    $email: String!
    $phone: String!
    $zipcode: String!
    $address: String!
    $profilephoto: Upload
    $documents: Upload
  ) {
    signUp(
      name: $name
      email: $email
      phone: $phone
      zipcode: $zipcode
      address: $address
      profilephoto: $profilephoto
      documents: $documents
    ) {
      name
      email
    }
  }
`;

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "500px",
    "text-align": "center",
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important"
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    //margin: theme.spacing(1)(3, 0, 2)
    margin: theme.spacing(1)
  },
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  centerItem: {
    "text-align": "center"
  }
});

//const phoneRegExp = /\(([0-9]{3})\)?([ ]?)([0-9]{3})\2([0-9]{4})/;
const phoneRegExp = /\(([0-9]{3})\)([ ]?)([0-9]{3})([-])([0-9]{4})/;
class Register extends React.Component {
  state = {
    profilephoto: [],
    documents: []
  };
  _handleImageChange(e, name) {
    e.preventDefault();
    console.log("e=", e.target.files[0]);
    console.log("name=", name);
    console.log(typeof e.target.files[0]);
    this.setState({ [name]: e.target.files[0] });
  }
  render() {
    const { classes, theme } = this.props;
    console.log("state=", this.state);
    let prof_photo = this.state.profilephoto;
    let doc_img = this.state.documents;

    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Mutation mutation={SIGNUP}>
              {(signUp, { loading, error }) => (
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    zipcode: "",
                    address: "",
                    profilephoto: null,
                    documents: null
                  }}
                  validationSchema={Yup.object().shape({
                    name: Yup.string().required("Name is Required!"),
                    email: Yup.string()
                      .email("Email is Invalid!")
                      .required("Email is Required!"),
                    phone: Yup.string()
                      .required("Phone No is Required!")
                      .length(
                        14,
                        "Please enter phone number with (123) 456-7899 format only."
                      )
                      .matches(
                        phoneRegExp,
                        "Please enter phone number with (123) 456-7899 format only."
                      ),
                    zipcode: Yup.string().required("Zipcode is Required!"),
                    address: Yup.string().required("Address is Required!")
                  })}
                  onSubmit={values => {
                    // log submit status
                    console.log("values=", values);
                    console.log("prof_photo=", prof_photo);
                    console.log("doc_img=", doc_img);
                    console.log(typeof prof_photo);
                    console.log(typeof doc_img);
                    signUp({
                      variables: {
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        zipcode: values.zipcode,
                        address: values.address,
                        profilephoto: values.profilephoto,
                        documents: values.documents
                      }
                    });
                  }}
                  render={({
                    values: { name, email },
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    handleReset,
                    setFieldValue
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      encType={"multipart/form-data"}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="name"
                            name="name"
                            variant="outlined"
                            autoFocus
                            id="name"
                            fullWidth
                            label="Name"
                            placeholder="Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.name ? errors.name : ""}
                            error={touched.name && Boolean(errors.name)}
                            margin="normal"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="email"
                            name="email"
                            variant="outlined"
                            autoFocus
                            id="email"
                            fullWidth
                            label="Email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.email ? errors.email : ""}
                            error={touched.email && Boolean(errors.email)}
                            margin="normal"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            name="phone"
                            autoComplete="phone"
                            id="phone"
                            label="Phone No"
                            placeholder="Phone No"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.phone ? errors.phone : ""}
                            error={touched.phone && Boolean(errors.phone)}
                            //margin="normal"
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            name="zipcode"
                            autoComplete="zipcode"
                            id="zipcode"
                            label="zipcode"
                            placeholder="Zipcode"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.zipcode ? errors.zipcode : ""}
                            error={touched.zipcode && Boolean(errors.zipcode)}
                            //margin="normal"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            variant="outlined"
                            name="address"
                            multiline={true}
                            autoComplete="address"
                            id="address"
                            label="Address"
                            placeholder="Address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.address ? errors.address : ""}
                            error={touched.address && Boolean(errors.address)}
                            margin="normal"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} style={{ display: "flex" }}>
                          <Typography style={{ marginRight: "20px" }}>
                            Profile Picture :{" "}
                          </Typography>

                          <input
                            className="fileInput"
                            type="file"
                            label="Profile Picture"
                            placeholder="Profile Picture"
                            name="profilephoto"
                            id="profilephoto"
                            /* onChange={e =>
                              this._handleImageChange(e, "profilephoto")
                            } */
                            onChange={event => {
                              setFieldValue(
                                "profilephoto",
                                event.currentTarget.files[0]
                              );
                            }}
                            /* onChange={({ target: { files } }) => {
                              const file = files[0];
                              console.log("file=", file);
                            }} */
                            //onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              touched.profilephoto ? errors.profilephoto : ""
                            }
                            error={
                              touched.profilephoto &&
                              Boolean(errors.profilephoto)
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} style={{ display: "flex" }}>
                          <Typography style={{ marginRight: "20px" }}>
                            Document:{" "}
                          </Typography>

                          <input
                            className="fileInput"
                            type="file"
                            label="Licence Document"
                            name="documents"
                            id="documents"
                            /* onChange={e =>
                              this._handleImageChange(e, "documents")
                            } */
                            onChange={event => {
                              setFieldValue(
                                "documents",
                                event.currentTarget.files[0]
                              );
                            }}
                            /* onChange={({ target: { files } }) => {
                              const file = files[0];
                              console.log("file=", file);
                            }} */
                            //onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              touched.documents ? errors.documents : ""
                            }
                            error={
                              touched.documents && Boolean(errors.documents)
                            }
                          />
                        </Grid>
                        <Grid item xs={12} className={classes.centerItem}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                          >
                            Sign Up
                          </Button>
                        </Grid>
                        <Grid item xs={12} className={classes.centerItem}>
                          <Grid item>
                            <Link href="/login" variant="body2">
                              Already have an account? Sign in
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                    </form>
                  )}
                />
              )}
            </Mutation>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Register);
