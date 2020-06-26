import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
// import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Drivers() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Drivers Details</h4>
            <p className={classes.cardCategoryWhite}>
              Consist of all Registered Drivers on AlongKab
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Username", "Booked Rides", "Current Route", "Destination","Status", "Action"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout",  "Niger", "Oud-Turnhout","Online",<span><Tooltip id="tooltip-top" title="Edit" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Edit" className={classes.tableActionButton}><Edit className={classes.tableActionButtonIcon + " " + classes.edit}/>
                </IconButton>
              </Tooltip><Tooltip id="tooltip-top" title="Remove" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Close" className={classes.tableActionButton}><Close className={classes.tableActionButtonIcon + " " + classes.close}/>
                </IconButton>
              </Tooltip></span>],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "Niger", "Oud-Turnhout", "Online",<span><Tooltip id="tooltip-top" title="Edit" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Edit" className={classes.tableActionButton}><Edit className={classes.tableActionButtonIcon + " " + classes.edit}/>
                </IconButton>
              </Tooltip><Tooltip id="tooltip-top" title="Remove" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Close" className={classes.tableActionButton}><Close className={classes.tableActionButtonIcon + " " + classes.close}/>
                </IconButton>
              </Tooltip></span>],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "Niger", "Oud-Turnhout", "Offline",<span><Tooltip id="tooltip-top" title="Edit" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Edit" className={classes.tableActionButton}><Edit className={classes.tableActionButtonIcon + " " + classes.edit}/>
                </IconButton>
              </Tooltip><Tooltip id="tooltip-top" title="Remove" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Close" className={classes.tableActionButton}><Close className={classes.tableActionButtonIcon + " " + classes.close}/>
                </IconButton>
              </Tooltip></span>],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "Niger", "Oud-Turnhout", "Offline",<span><Tooltip id="tooltip-top" title="Edit" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Edit" className={classes.tableActionButton}><Edit className={classes.tableActionButtonIcon + " " + classes.edit}/>
                </IconButton>
              </Tooltip><Tooltip id="tooltip-top" title="Remove" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Close" className={classes.tableActionButton}><Close className={classes.tableActionButtonIcon + " " + classes.close}/>
                </IconButton>
              </Tooltip></span>],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "Niger", "Oud-Turnhout", "Online",<span><Tooltip id="tooltip-top" title="Edit" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Edit" className={classes.tableActionButton}><Edit className={classes.tableActionButtonIcon + " " + classes.edit}/>
                </IconButton>
              </Tooltip><Tooltip id="tooltip-top" title="Remove" placement="top" classes={{ tooltip: classes.tooltip }}
              ><IconButton aria-label="Close" className={classes.tableActionButton}><Close className={classes.tableActionButtonIcon + " " + classes.close}/>
                </IconButton>
              </Tooltip></span>],

              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Driver</h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="First Name"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Last Name"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}                    
                  />
                </GridItem>
             
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Contact No"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="State of Residence"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Gender"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Vehicle Manufacturer"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Vehicle Model"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="License Plate"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Vehicle Color"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Drivers License"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Upload Drivers License"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Upload profile picture"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Nuban Account Number"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Account Holder Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Bank Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Payment Type"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer> */}
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer> */}
            </CardBody>
            <CardFooter>
              <Button color="primary">Submit</Button>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Username</h6>
              <h6 className={classes.cardCategory}>Email</h6>
              <h6 className={classes.cardCategory}>Phone No</h6>
              <Button color="primary" round>
                Update Profile
              </Button>
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
