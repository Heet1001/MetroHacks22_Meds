import React from "react";

import { Column, Row, Stack, Line, Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const LoginpagePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/dashboard");
  }
  function handleNavigate6() {
    navigate("/dashboard");
  }
  function handleNavigate7() {
    navigate("/dashboard");
  }
  function handleNavigate8() {
    navigate("/dashboard");
  }

  return (
    <>
      <Column className="bg-gradient  font-imprima items-center justify-start mx-[auto] lg:p-[131px] xl:p-[164px] 2xl:p-[184px] 3xl:p-[221px] w-[100%]">
        <Column className="justify-start w-[37%]">
          <Row className="items-start justify-end ml-[auto] w-[90%]">
            <Stack className="2xl:h-[104px] 3xl:h-[125px] lg:h-[74px] xl:h-[93px] w-[32%]">
              <Stack className="absolute 2xl:h-[104px] 3xl:h-[125px] lg:h-[74px] xl:h-[93px] left-[0] w-[85%]">
                <Stack className="absolute bottom-[0] 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] w-[100%]">
                  <Stack className="absolute lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] top-[0] w-[100%]">
                    <Stack className="absolute lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] left-[0] w-[59%]">
                      <Line className="absolute bg-red_800 bottom-[0] h-[5px] left-[10%] rotate-[44deg] w-[39%]" />
                      <div className="absolute bg-red_800 lg:h-[42px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] rounded-radius26 top-[0] w-[100%]"></div>
                    </Stack>
                    <div className="absolute bg-red_800 lg:h-[42px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] right-[0] rounded-radius26 top-[0] w-[58%]"></div>
                  </Stack>
                  <Img
                    src="images/img_polygon1.png"
                    className="absolute bottom-[0] lg:h-[52px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] inset-x-[0] mx-[auto] rounded-radius10 lg:w-[52px] xl:w-[65px] 2xl:w-[73px] 3xl:w-[87px]"
                    alt="PolygonOne"
                  />
                </Stack>
                <Stack className="absolute bg-orange_200 lg:h-[52px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] right-[7%] rounded-radius11 shadow-bs top-[0] w-[26%]">
                  <Stack className="absolute bottom-[0] lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                    <div className="absolute bg-light_blue_901 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] top-[0] w-[100%]"></div>
                    <div className="absolute bg-light_blue_902 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius11 w-[100%]"></div>
                  </Stack>
                  <div className="absolute bg-red_900_35 bottom-[34%] lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] lg:w-[17px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"></div>
                </Stack>
              </Stack>
              <Stack className="absolute bg-orange_200 lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] lg:pr-[16px] xl:pr-[21px] 2xl:pr-[23px] 3xl:pr-[28px] right-[0] rounded-radius11 shadow-bs top-[23%] w-[62%]">
                <Stack className="absolute lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] left-[0] w-[51%]">
                  <div className="absolute bg-light_blue_901 lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] right-[0] w-[38%]"></div>
                  <div className="absolute bg-light_blue_901 lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] rounded-radius11 w-[100%]"></div>
                </Stack>
                <Line className="absolute bg-gradient1  h-[5px] inset-x-[0] mx-[auto] top-[0] w-[35%]" />
              </Stack>
            </Stack>
            <Text
              className="font-normal leading-[normal] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[4px] not-italic text-shadow-ts text-white_A700 w-[64%]"
              as="h1"
              variant="h1"
            >
              Med
              <br />
              Tracker
            </Text>
          </Row>
          <Column className="bg-white_A700 items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius15 shadow-bs w-[89%]">
            <Text
              className="font-normal mt-[4px] not-italic text-black_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Sign In
            </Text>
            <Column className="items-center justify-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[84%]">
              <Input
                className="common-pointer placeholder:text-black_900_87 GroupFour"
                wrapClassName="w-[100%]"
                type="text"
                onClick={handleNavigate6}
                name="GroupFour"
                placeholder="First name"
              ></Input>
              <Input
                className="common-pointer placeholder:text-black_900_87 GroupFour"
                wrapClassName="2xl:mt-[22px] 3xl:mt-[27px] lg:mt-[16px] w-[100%] xl:mt-[20px]"
                type="text"
                onClick={handleNavigate8}
                name="GroupTwo"
                placeholder="Last name"
              ></Input>
              <Input
                className="common-pointer placeholder:text-black_900_87 GroupFour"
                wrapClassName="2xl:mt-[22px] 3xl:mt-[27px] lg:mt-[16px] w-[100%] xl:mt-[20px]"
                onClick={handleNavigate1}
                name="GroupOne"
                placeholder="Date of Birth"
              ></Input>
            </Column>
            <Button
              className="common-pointer font-normal 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] not-italic lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-center w-[100%]"
              onClick={handleNavigate7}
              shape="RoundedBorder23"
              size="md"
              variant="FillLightblue901"
            >
              Sign In
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LoginpagePage;
