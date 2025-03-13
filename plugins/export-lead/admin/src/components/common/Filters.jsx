import React, { useEffect, useState } from "react";
import {
  Button,
  ContentLayout,
  Field,
  FieldLabel,
  Flex,
  SingleSelect,
  SingleSelectOption,
} from "@strapi/design-system";
import { DatePicker } from "@strapi/design-system";
import { Download } from "@strapi/icons";
import * as XLSX from "xlsx";

const Filters = ({
  availableContentType,
  selectedContentType,
  setSelectedContentType,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  fetchContentTypeData,
  contentData,
}) => {
  useEffect(() => {
    if (selectedContentType) {
      console.log("Fetching data for:", selectedContentType);
      fetchContentTypeData(selectedContentType);
    }
  }, [selectedContentType]);

  const handleDownload = () => {
    if (!contentData || contentData.length === 0) {
      alert("No data available to download.");
      return;
    }

    // Check if a content type is selected and generate the file name dynamically
    const contentType = availableContentType.find(
      (type) => type.uid === selectedContentType
    );

    const contentTypeName = contentType.schema.displayName || "UnknownContent";
    const dateRange = startDate && endDate ? `_${startDate}-${endDate}` : "";
    const fileName = `${contentTypeName}${dateRange}.xlsx`;

    // create a new workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(contentData);
    console.log("data", ws);
    console.log(contentData, "content data");

    // add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, fileName);
  };

  return (
    <ContentLayout>
      <Flex
        gap={4}
        justifyContent={"space-between"}
        alignItems={"end"}
        style={{
          marginBottom: "2rem",
        }}
      >
        <Flex gap={2}>
          <Field>
            <FieldLabel style={{marginBottom:'6px'}}>Content Type:</FieldLabel>
            <SingleSelect
              value={selectedContentType}
              onChange={(value) => {
                setSelectedContentType(value);
              }}
            >
              <SingleSelectOption value="">-- Select --</SingleSelectOption>
              {availableContentType.map((type) => {
                return (
                  <SingleSelectOption key={type.uid} value={type.uid}>
                    {type.schema.displayName}
                  </SingleSelectOption>
                );
              })}
            </SingleSelect>
          </Field>
          <Field>
            <FieldLabel>Start Date:</FieldLabel>
            <DatePicker
              value={startDate}
              onChange={(value) => {
                setStartDate(value);
              }}
              size="M"
            />
          </Field>
          <Field>
            <FieldLabel>End Data:</FieldLabel>
            <DatePicker
              value={endDate}
              onChange={(value) => {
                setEndDate(value);
              }}
              size="M"
            />
          </Field>
        </Flex>
        <Flex gap={"92px"}>
          <Button
            disabled={!selectedContentType ? true : false}
            onClick={handleDownload}
            size={"L"}
            startIcon={<Download />}
          >
            Export
          </Button>
          {/* <Button size={"L"} disabled={!selectedContentType ? true : false}>
            Fetch Data
          </Button> */}
        </Flex>
      </Flex>
    </ContentLayout>
  );
};

export default Filters;
