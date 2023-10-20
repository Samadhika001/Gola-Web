import React, { useState } from "react";
import Loginpic from "../../assets/2.jpg";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function TripCreateForm() {
//   const backgroundImageStyle = {
//     backgroundImage: `url(${Loginpic})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     width: "50%", // 60% of the screen width
//     height: "100%", // 100% of the screen height
//   };

  // State variables for form input and error messages
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState(""); // Add confirm password state
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email and password validation
    if (!email || !password || !username || !confirmpassword) {
      setErrorMessage("Please fill in all fields.");
    }else {
      // Your authentication logic here
      // Redirect the user upon successful login
      // Replace the following line with your logic
      console.log("User logged in:", email);
    }
  };

  return (
    <section className="flex flex-row items-center h-full pb-8 pl-8 pr-8">
      <div className="flex items-center justify-center pb-[0px] mt-12 ml-4  w-[100%]">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Create New Trip
          </Typography>
          <form
            className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="flex-col items-center justify-center">
              <div className="w-[200px] mb-4 flex justify-center">
                <Input
                  size="lg"
                  label="UserName"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={errorMessage && !username ? "Name is required" : null}
                />
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col gap-4 mb-4 mr-4">
                  <Input
                    size="lg"
                    label="Confirm Password"
                    type="password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={
                      errorMessage && !confirmpassword
                        ? "Password is required"
                        : null
                    }
                  />
                </div>
                <div className="flex flex-col gap-4 mb-4">
                  <Input
                    size="lg"
                    label="Confirm Password"
                    type="password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={
                      errorMessage && !confirmpassword
                        ? "Password is required"
                        : null
                    }
                  />
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="mt-2 text-sm text-red-500">{errorMessage}</div>
            )}
            <Button type="submit" className="mt-6" fullWidth>
              Login
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default TripCreateForm;
