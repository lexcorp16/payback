import React from "react";
import {
  Avatar,
  Flex,
  Div,
  Card,
  Text,
  Hr,
  Button,
  Input
} from "./../../components";

export default props => {
  return (
    <Div height="100%">
      <Flex alignItems="flex-start" mb={6} mt={7}>
        <Div width="50%" pl={5} pr={3} pt={3}>
          <Card>
            <CardHeader title="Profile Details" align="center" />
            <Div px={6} py={6}>
              <form action="">
                <Input placeholder="First Name" name="firstName" mb={3} />
                <Input placeholder="Last Name" name="lastName" mb={3} />
                <Input placeholder="Email Address" name="email" mb={3} />
                <Input placeholder="Phone Number" name="phone" mb={3} />
                <Button sm>Save Changes</Button>
              </form>
              <Hr mt={6} mb={6} />
              <Flex>
                <Text color="textMuted">Password</Text>
                <Button sm info>
                  Change Password
                </Button>
              </Flex>
            </Div>
          </Card>
        </Div>

        <Div width="50%" pl={3} pr={5} pt={3}>
          <Card>
            <CardHeader title="Profile photo" align="center" />
            <Flex mt={5} mb={7} justifyContent="center">
              <Avatar circle height="105px" width="105px">
                BR
              </Avatar>
            </Flex>
            <Text fontSize={4} align="center">
              Upload Instructions
            </Text>
            <Text
              fontSize={3}
              align="center"
              color="textSecondary"
              mt={3}
              px={6}
            >
              Must be at least 128px by 128px and smaller than 512KB. Image will
              be displayed on Payback in the same scale as above.
            </Text>
            <Flex justifyContent="center">
              <Button sm mt={6} mb={4} mr={2}>
                Upload photo
              </Button>
              <Button disabled danger sm mt={6} mb={4}>
                Remove photo
              </Button>
            </Flex>
          </Card>
        </Div>
      </Flex>
    </Div>
  );
};

const CardHeader = props => {
  return (
    <div>
      <Text fontSize={4} mb={4} {...props}>
        {props.title}
      </Text>
      <Hr />
    </div>
  );
};
