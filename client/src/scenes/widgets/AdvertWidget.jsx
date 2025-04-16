import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween.jsx";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
        </FlexBetween>
        <FlexBetween>
          <img
            width="100%"
            height="auto"
            alt="advert"
            src="http://localhost:3001/assets/info4.jpeg"
            style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
          />
          </FlexBetween>
          <FlexBetween>
            <Typography color={main}>MikaCosmetics</Typography>
            <Typography color={medium}>mikaCosmetics.com</Typography>
          </FlexBetween>
      <Typography color={medium} m="0.75rem 0">Your pothway to stunning and immaculate the beauty 
        and made sure your skin is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
