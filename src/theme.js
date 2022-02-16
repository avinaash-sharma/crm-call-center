import { extendTheme } from "@chakra-ui/react"

const colors = {
  primary: {
    100: "#FB8859",
    200: "#FB7843",
    300: "#FB692F",
    400: "#FB5B1C",
    500: "#FB4E0A",
    600: "#EF4604",
    700: "#DE4104",
    800: "#CE3C04",
    900: "#C03804",
  },
}

const customTheme = extendTheme({ colors })

export default customTheme
