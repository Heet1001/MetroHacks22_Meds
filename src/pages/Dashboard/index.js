import React from "react";

import { Column, Row, Stack, Line, Img, Text, List, Input } from "components";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/addingmed");
  }

  return (
    <>
      <Column className="bg-gradient  font-imprima items-center justify-start mx-[auto] xl:p-[100px] 2xl:p-[112px] 3xl:p-[135px] lg:p-[80px] w-[100%]">
        <Column className="justify-start lg:mb-[56px] xl:mb-[70px] 2xl:mb-[78px] 3xl:mb-[94px] w-[31%]">
          <Row className="items-start justify-end ml-[auto] w-[64%]">
            <Stack className="lg:h-[56px] xl:h-[70px] 2xl:h-[78px] 3xl:h-[94px] lg:w-[55px] xl:w-[69px] 2xl:w-[77px] 3xl:w-[93px]">
              <Stack className="absolute lg:h-[56px] xl:h-[70px] 2xl:h-[78px] 3xl:h-[94px] left-[0] w-[86%]">
                <Stack className="absolute bottom-[0] lg:h-[48px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] w-[100%]">
                  <Stack className="absolute lg:h-[36px] xl:h-[46px] 2xl:h-[51px] 3xl:h-[61px] top-[0] w-[100%]">
                    <Stack className="absolute lg:h-[36px] xl:h-[46px] 2xl:h-[51px] 3xl:h-[61px] left-[0] w-[59%]">
                      <Line className="absolute bg-red_800 bottom-[0] h-[5px] left-[9%] rotate-[43deg] w-[37%]" />
                      <div className="absolute bg-red_800 lg:h-[32px] xl:h-[40px] 2xl:h-[44px] 3xl:h-[53px] rounded-radius195 top-[0] w-[100%]"></div>
                    </Stack>
                    <div className="absolute bg-red_800 lg:h-[32px] xl:h-[40px] 2xl:h-[44px] 3xl:h-[53px] right-[0] rounded-radius195 top-[0] w-[58%]"></div>
                  </Stack>
                  <Img
                    src="images/img_polygon1.png"
                    className="absolute bottom-[0] lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] inset-x-[0] mx-[auto] rounded-radius10 w-[76%]"
                    alt="PolygonOne"
                  />
                </Stack>
                <Stack className="absolute bg-orange_200 lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] right-[7%] rounded-radius75 shadow-bs top-[0] w-[25%]">
                  <Stack className="absolute bottom-[0] lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]">
                    <div className="absolute bg-light_blue_901 3xl:h-[10px] lg:h-[6px] 2xl:h-[8px] xl:h-[8px] top-[0] w-[100%]"></div>
                    <div className="absolute bg-light_blue_902 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] rounded-radius75 w-[100%]"></div>
                  </Stack>
                  <div className="absolute bg-red_900_35 bottom-[35%] lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[100%]"></div>
                </Stack>
              </Stack>
              <Stack className="absolute bg-orange_200 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[15px] 3xl:pr-[18px] right-[0] rounded-radius8 shadow-bs top-[23%] w-[62%]">
                <Stack className="absolute lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] left-[0] w-[51%]">
                  <div className="absolute bg-light_blue_901 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] right-[0] w-[36%]"></div>
                  <div className="absolute bg-light_blue_901 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius8 w-[100%]"></div>
                </Stack>
                <Line className="absolute bg-gradient1  h-[5px] inset-x-[0] mx-[auto] top-[0] w-[35%]" />
              </Stack>
            </Stack>
            <Text
              className="font-normal leading-[normal] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] mt-[3px] not-italic text-shadow-ts text-white_A700 w-[64%]"
              as="h1"
              variant="h1"
            >
              Med
              <br />
              Tracker
            </Text>
          </Row>
          <Stack className="lg:h-[377px] xl:h-[472px] 2xl:h-[531px] 3xl:h-[637px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
            <Column className="absolute bg-indigo_700 bottom-[0] justify-end 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius15 shadow-bs w-[100%]">
              <Column className="items-center justify-start lg:mb-[18px] xl:mb-[23px] 2xl:mb-[25px] 3xl:mb-[31px] lg:mt-[41px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] w-[93%]">
                <Text className="columnwelcomejon" as="h1" variant="h1">
                  Welcome, Jon!
                </Text>
                <Text
                  className="mt-[3px] columnwelcomejon"
                  as="h3"
                  variant="h3"
                >
                  November 19, 2022
                </Text>
                <Column className="justify-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                  <Text className="columnwelcomejon" as="h2" variant="h2">
                    Notifications
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] ml-[4px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[99%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[100%]">
                      <Row className="bg-gray_200 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius14 shadow-bs w-[80%]">
                        <Text
                          className="ml-[2px] not-italic text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          9:00 AM
                        </Text>
                        <Line className="bg-red_302 lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] mt-[1px] w-[2px]" />
                        <Text
                          className="lg:ml-[5px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] not-italic text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Albuterol
                        </Text>
                      </Row>
                      <Row className="bg-green_400 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-start justify-end lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[6px] rounded-radius50 shadow-bs lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                        <Line className="bg-gray_200 h-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] rotate-[137deg] w-[33%]" />
                        <Line className="bg-gray_200 h-[4px] mb-[3px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] rotate-[43deg] w-[60%]" />
                      </Row>
                    </Row>
                    <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[100%]">
                      <Row className="bg-gray_200 items-center lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] rounded-radius14 shadow-bs w-[80%]">
                        <Text
                          className="ml-[1px] not-italic text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          1:00 PM
                        </Text>
                        <Line className="bg-red_302 lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[2px] w-[2px]" />
                        <Text
                          className="lg:ml-[5px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] not-italic text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Albuterol
                        </Text>
                      </Row>
                      <Row className="bg-green_400 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-start justify-end lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[6px] rounded-radius50 shadow-bs lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                        <Line className="bg-gray_200 h-[4px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rotate-[137deg] w-[33%]" />
                        <Line className="bg-gray_200 h-[4px] mb-[1px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rotate-[43deg] w-[60%]" />
                      </Row>
                    </Row>
                  </List>
                  <Input
                    className="common-pointer font-normal not-italic p-[0] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] placeholder:text-black_900_91 text-black_900_91 w-[100%]"
                    wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[14px] ml-[4px] w-[79%] xl:mt-[18px]"
                    onClick={handleNavigate2}
                    name="GroupTen"
                    placeholder="+ add new medication"
                    variant="OutlineBlack9003f_1"
                  ></Input>
                </Column>
              </Column>
            </Column>
            <Img
              src="images/img_45c243cd3e927df.png"
              className="absolute lg:h-[118px] xl:h-[148px] 2xl:h-[166px] 3xl:h-[199px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] lg:w-[117px] xl:w-[147px] 2xl:w-[165px] 3xl:w-[198px]"
              alt="45c243cd3e927df"
            />
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default DashboardPage;
