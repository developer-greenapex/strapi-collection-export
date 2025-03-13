import React, { useEffect, useState } from "react";
import {
  BaseHeaderLayout,
  ContentLayout,
  Flex,
  Layout,
  EmptyStateLayout,
  Field,
  FieldLabel,
  TextInput,
} from "@strapi/design-system";
import Filters from "../../components/common/Filters";
import adminRequests from "../../api";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import TabularData from "../../components/common/TabularData";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [contentData, setContentData] = useState([]);
  const [selectedContentType, setSelectedContentType] = useState("");
  const [availableContentType, setAvailableContentType] = useState([]);
  const [maxPages, setMaxPages] = useState(10);

  useEffect(() => {
    adminRequests
      .getAllContentTypes()
      .then((response) => {
        setAvailableContentType(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchContentTypeData = () => {
    setPage(1);
    // setIsLoading(true);
    adminRequests
      .getDataByContentType(selectedContentType)
      .then((response) => {
        setContentData(response);
      })
      .catch((error) => {
        console.log(error);
      })
      // .finally(() => {
      //   // setTimeout(() => {
      //   // setIsLoading(false);
      //   // }, 3000);
      // });
    // console.log("Fetched data:", selectedContentType);
  };

  if (isLoading) {
    return <LoadingIndicatorPage />;
  }
  return (
    <Layout sideNav={null}>
      <BaseHeaderLayout
        title={"Welcome to Export Plugin"}
        subtitle={"Developed by Green Apex"}
        as={"h2"}
      />
      <Filters
        availableContentType={availableContentType}
        selectedContentType={selectedContentType}
        setSelectedContentType={setSelectedContentType}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        fetchContentTypeData={fetchContentTypeData}
        contentData={contentData}
      />
      <TabularData
        data={contentData}
        page={page}
        setPage={setPage}
        maxPages={maxPages}
        setMaxPages={setMaxPages}
      />
    </Layout>
  );
};

export default HomePage;
