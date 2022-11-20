import React from "react";

import { Column, Row, Img, Text, Stack, List, Line, Button } from "components";

const CalenderaltPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-lato items-center justify-start mx-[auto] lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] w-[100%]">
        <Column className="justify-start w-[31%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_menu.svg"
              className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[28px] xl:w-[36px] 2xl:w-[40px] 3xl:w-[48px]"
              alt="menu"
            />
            <Text
              className="font-semibold lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] text-gray_901 tracking-ls1 w-[auto]"
              as="h4"
              variant="h4"
            >
              Nov 2022
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
              alt="arrowdown"
            />
            <Img
              src="images/img_calendar.svg"
              className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[124px] xl:ml-[155px] 2xl:ml-[174px] 3xl:ml-[209px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
              alt="calendar"
            />
          </Row>
          <Column className="bg-blue_100 items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius16 w-[100%]">
            <Column className="items-center justify-start mb-[1px] w-[98%]">
              <Row className="items-center justify-between w-[96%]">
                <Text className="rows" as="h3" variant="h3">
                  S
                </Text>
                <Text className="rows" as="h3" variant="h3">
                  M
                </Text>
                <Text className="rows" as="h3" variant="h3">
                  T
                </Text>
                <Text className="rows" as="h3" variant="h3">
                  W
                </Text>
                <Text className="rows" as="h3" variant="h3">
                  T
                </Text>
                <Text className="rows" as="h3" variant="h3">
                  F
                </Text>
                <Text className="rows" as="h3" variant="h3">
                  S
                </Text>
              </Row>
              <Row className="items-start justify-end ml-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[69%]">
                <Column className="justify-start w-[33%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="rowone" as="h3" variant="h3">
                      01
                    </Text>
                    <Text className="rowone" as="h3" variant="h3">
                      02
                    </Text>
                  </Row>
                  <div className="bg-red_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] rounded-radius45 w-[11%]"></div>
                </Column>
                <Stack className="lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[11%]">
                  <Text
                    className="absolute top-[0] rowone"
                    as="h3"
                    variant="h3"
                  >
                    03
                  </Text>
                  <Column className="absolute bg-red_300 bottom-[0] inset-x-[0] items-center justify-start mx-[auto] rounded-radius45 w-[35%]">
                    <div className="bg-red_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] rounded-radius45 w-[100%]"></div>
                  </Column>
                </Stack>
                <Text className="rowellipsethree" as="h3" variant="h3">
                  04
                </Text>
                <Column className="items-center justify-start lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[11%]">
                  <Text className="rowone" as="h3" variant="h3">
                    05
                  </Text>
                  <div className="bg-red_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] mt-[2px] rounded-radius45 w-[35%]"></div>
                </Column>
              </Row>
              <Column className="justify-start w-[99%]">
                <Row className="items-start justify-between w-[100%]">
                  <Column className="justify-start lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[23%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="rowone" as="h3" variant="h3">
                        06
                      </Text>
                      <Text className="rowone" as="h3" variant="h3">
                        07
                      </Text>
                    </Row>
                    <div className="bg-red_300 xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:ml-[44px] xl:ml-[55px] 2xl:ml-[61px] 3xl:ml-[74px] rounded-radius45 w-[11%]"></div>
                  </Column>
                  <Text className="Eight" as="h3" variant="h3">
                    08
                  </Text>
                  <Text
                    className="bg-red_301 flex font-bold items-center mb-[2px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[6px] rounded-radius50 text-gray_700 tracking-ls1 w-[36px]"
                    as="h3"
                    variant="h3"
                  >
                    09
                  </Text>
                  <Text className="Eight" as="h3" variant="h3">
                    10
                  </Text>
                  <Text
                    className="flex items-center Eight"
                    as="h3"
                    variant="h3"
                  >
                    11
                  </Text>
                  <Text className="Eight" as="h3" variant="h3">
                    12
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-start justify-between 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[100%]">
                    <Text className="Thirteen" as="h3" variant="h3">
                      13
                    </Text>
                    <Text className="mt-[1px] rowone" as="h3" variant="h3">
                      14
                    </Text>
                    <Text
                      className="flex items-center Thirteen"
                      as="h3"
                      variant="h3"
                    >
                      15
                    </Text>
                    <Text className="Thirteen" as="h3" variant="h3">
                      16
                    </Text>
                    <Text className="Thirteen" as="h3" variant="h3">
                      17
                    </Text>
                    <Text className="Thirteen" as="h3" variant="h3">
                      18
                    </Text>
                    <Text className="Thirteen" as="h3" variant="h3">
                      19
                    </Text>
                  </Row>
                  <Row className="items-center justify-between 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[100%]">
                    <Text className="rowone" as="h3" variant="h3">
                      20
                    </Text>
                    <Text className="rowone" as="h3" variant="h3">
                      21
                    </Text>
                    <Text className="rowone" as="h3" variant="h3">
                      22
                    </Text>
                    <Text className="rowone" as="h3" variant="h3">
                      23
                    </Text>
                    <Text className="rowone" as="h3" variant="h3">
                      24
                    </Text>
                    <Text className="rowone" as="h3" variant="h3">
                      25
                    </Text>
                    <Text className="rowone" as="h3" variant="h3">
                      26
                    </Text>
                  </Row>
                </List>
                <Row className="items-center ml-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[54%]">
                  <Text className="rowone" as="h3" variant="h3">
                    27
                  </Text>
                  <Text
                    className="lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] rowone"
                    as="h3"
                    variant="h3"
                  >
                    28
                  </Text>
                  <Text className="rowellipsethree" as="h3" variant="h3">
                    29
                  </Text>
                  <Text className="rowellipsethree" as="h3" variant="h3">
                    30
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
          <Text
            className="font-bold ml-[1px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] text-gray_901 tracking-ls1 w-[auto]"
            as="h4"
            variant="h4"
          >
            Upcoming
          </Text>
          <Row className="items-end justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
            <Line className="bg-red_302 h-[8px] lg:mb-[212px] xl:mb-[266px] 2xl:mb-[299px] 3xl:mb-[359px] rotate-[90deg] w-[2%]" />
            <Column className="items-center justify-start lg:mb-[216px] xl:mb-[271px] 2xl:mb-[305px] 3xl:mb-[366px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[34%]">
              <Row className="items-start justify-between w-[98%]">
                <Text
                  className="font-bold lg:mb-[5px] 2xl:mb-[7px] xl:mb-[7px] 3xl:mb-[9px] text-red_302 tracking-ls1 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  09
                </Text>
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[51%]">
                  <Text
                    className="text-black_900_bf tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    8:00 AM
                  </Text>
                  <Text
                    className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-black_900_bf tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    12:00 PM
                  </Text>
                </Column>
              </Row>
              <Row className="items-end mt-[1px] w-[100%]">
                <Text
                  className="font-bold text-red_302 tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  NOV
                </Text>
                <Text
                  className="mb-[1px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] text-black_900_bf tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  8:00 PM
                </Text>
              </Row>
            </Column>
            <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[56%]">
              <Row className="items-end justify-between w-[100%]">
                <Text
                  className="mb-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] text-black_900 tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  METHYLPREDNISOLONE
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                  alt="arrowright"
                />
              </Row>
              <Button className="flex lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center lg:ml-[101px] xl:ml-[127px] 2xl:ml-[142px] 3xl:ml-[171px] lg:mt-[184px] xl:mt-[231px] 2xl:mt-[260px] 3xl:mt-[312px] rounded-radius50 lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]">
                <Img
                  src="images/img_plus.svg"
                  className="flex items-center justify-center lg:h-[28px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px]"
                  alt="plus"
                />
              </Button>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default CalenderaltPage;
