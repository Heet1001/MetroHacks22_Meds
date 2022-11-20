import React from "react";

import { Column, Row, Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const AddingmedPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/calendar");
  }
  function handleNavigate3() {
    navigate("/calendar");
  }
  function handleNavigate4() {
    navigate("/calendar");
  }
  function handleNavigate5() {
    navigate("/calendar");
  }

  return (
    <>
      <Column className="bg-gradient  font-imprima items-center justify-start mx-[auto] lg:p-[28px] xl:p-[35px] 2xl:p-[39px] 3xl:p-[47px] w-[100%]">
        <Row
          className="common-pointer bg-indigo_700 items-center justify-center pb-[2px] px-[2px] rounded-radius16 shadow-bs w-[23%]"
          onClick={handleNavigate3}
        >
          <Text
            className="lg:ml-[37px] xl:ml-[47px] 2xl:ml-[52px] 3xl:ml-[63px] tracking-ls1 columnwelcomejon"
            as="h3"
            variant="h3"
          >
            ADD A MEDICATION
          </Text>
          <Img
            src="images/img_airplane.svg"
            className="lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] w-[13%]"
            alt="airplane"
          />
        </Row>
        <Column className="bg-indigo_700 items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[30%]">
          <Text
            className="common-pointer bg-gray_200 font-normal mt-[2px] not-italic lg:pb-[4px] 2xl:pb-[6px] xl:pb-[6px] 3xl:pb-[8px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] lg:px-[28px] xl:px-[35px] 2xl:px-[39px] 3xl:px-[47px] rounded-radius18 text-gray_600 tracking-ls1 w-[338px]"
            as="h3"
            variant="h3"
            onClick={handleNavigate}
          >
            MEDICAL CONDITION
          </Text>
          <Text
            className="common-pointer bg-gray_200 font-normal lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:pb-[12px] xl:pb-[15px] 2xl:pb-[16px] 3xl:pb-[20px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] lg:px-[28px] xl:px-[35px] 2xl:px-[39px] 3xl:px-[47px] rounded-radius18 text-gray_600 text-shadow-ts tracking-ls1 w-[338px]"
            as="h3"
            variant="h3"
            onClick={handleNavigate4}
          >
            NAME
          </Text>
          <Text
            className="common-pointer bg-gray_200 font-normal lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] not-italic lg:px-[28px] xl:px-[35px] 2xl:px-[39px] 3xl:px-[47px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] rounded-radius18 text-bluegray_400 text-shadow-ts tracking-ls1 w-[338px]"
            as="h3"
            variant="h3"
            onClick={handleNavigate5}
          >
            DOSE
          </Text>
          <Column className="bg-gray_200 items-center justify-start lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] p-[3px] rounded-radius18 w-[98%]">
            <Text
              className="font-normal not-italic text-black_900 tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              FREQUENCY
            </Text>
            <Column className="items-center justify-start lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] mt-[4px] w-[98%]">
              <Column className="bg-white_A700 justify-start xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius20 shadow-bs w-[100%]">
                <Column className="items-center justify-start ml-[3px] w-[89%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text
                      className="bg-bluegray_100 font-normal mb-[3px] not-italic pb-[3px] lg:px-[5px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px] rounded-radius5 text-black_900 text-shadow-ts w-[120px]"
                      as="h3"
                      variant="h3"
                    >
                      START DATE:
                    </Text>
                    <div className="bg-bluegray_100 lg:h-[19px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] mt-[3px] rounded-radius5 w-[45%]"></div>
                  </Row>
                  <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                    <Text
                      className="bg-bluegray_100 font-normal not-italic lg:pl-[20px] xl:pl-[26px] 2xl:pl-[29px] 3xl:pl-[35px] pr-[3px] rounded-radius5 text-black_900 text-shadow-ts w-[120px]"
                      as="h3"
                      variant="h3"
                    >
                      {" "}
                      END DATE:
                    </Text>
                    <div className="bg-bluegray_100 lg:h-[19px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] rounded-radius5 w-[45%]"></div>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-deep_orange_A200 items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius18 w-[100%]">
                <Text
                  className="bg-bluegray_100 font-alegreyasans font-normal not-italic pb-[3px] lg:px-[28px] xl:px-[35px] 2xl:px-[39px] 3xl:px-[47px] rounded-radius12 text-black_900 w-[270px]"
                  as="h3"
                  variant="h3"
                >
                  <span className="text-black_900 font-imprima lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px]">
                    {" "}
                  </span>
                  <span className="text-black_900 font-imprima lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px]">
                    TIME(HH:MM)
                  </span>
                </Text>
                <Button
                  className="font-imprima font-normal lg:mb-[180px] xl:mb-[226px] 2xl:mb-[254px] 3xl:mb-[305px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[12px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-center w-[33%]"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineBlack900"
                >
                  {" "}
                  ADD TIME
                </Button>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default AddingmedPage;
