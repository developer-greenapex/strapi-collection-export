import {
  Box,
  Button,
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  TFooter,
  Th,
  Thead,
  Tr,
  Typography,
  VisuallyHidden,
} from "@strapi/design-system";
import React, { useEffect } from "react";
import Pagination from "./Pagination";

const TabularData = ({ data, page, setPage, maxPages, setMaxPages }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  const RenderTableHeader = () => {
    let retStatus = [];
    if (data.length > 0) {
      let item = data[0];
      let index = 0;
      for (let key in item) {
        if (
          key !== "createdAt" &&
          key !== "publishedAt" &&
          key !== "updatedAt"
        ) {
          retStatus.push(
            <Th key={index}>
              <Typography variant="sigma">{key}</Typography>
            </Th>
          );
          index++;
        }
      }
    }

    return retStatus;
  };

  const RenderTableData = () => {
    let retStatus = [];
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let index = 0;
        let rowData = [];
        for (let key in item) {
          if (
            key !== "createdAt" &&
            key !== "publishedAt" &&
            key !== "updatedAt"
          ) {
            rowData.push(
              <Td>
                <Typography textColor="neutral800">{item[key]}</Typography>
              </Td>
            );
            index++;
          }
        }
        retStatus.push(<Tr key={i}>{rowData}</Tr>);
      }
    }

    return retStatus;
  };

  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={3}
        rowCount={10}
        // footer={
        //   <Pagination
        //     currentPage={page}
        //     maxPages={maxPages}
        //     setCurrentPage={setPage} />
        // }
      >
        <Thead>
          <Tr>{RenderTableHeader()}</Tr>
        </Thead>

        <Tbody>{RenderTableData()}</Tbody>
      </Table>
    </Box>
  );
};

export default TabularData;
