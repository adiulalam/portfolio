import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, IconButton, Tab } from "@mui/material";
import { useState } from "react";
import type { SyntheticEvent } from "react";
import {
  Close as CloseIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@mui/icons-material";

type AdminTabsProps = {
  defaultValue?: string;
  deleteCallback?: (tab: string) => void;
  addCallback?: () => void;
  tabLists: { label: string; value: string; component: JSX.Element }[];
};

export const AdminTabs = ({
  defaultValue,
  deleteCallback,
  addCallback,
  tabLists,
}: AdminTabsProps) => {
  const [value, setValue] = useState(defaultValue ?? tabLists[0]?.value ?? "0");

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
          }}
        >
          <TabList
            sx={{
              ".MuiTabs-flexContainer": { flexWrap: "wrap" },
            }}
            onChange={handleChange}
            centered
          >
            {tabLists.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                sx={{ minHeight: 0 }}
                icon={
                  deleteCallback ? (
                    <CloseIcon
                      onClick={() => deleteCallback(tab.value)}
                      sx={{
                        "&:hover": {
                          color: "red",
                          background: "rgba(255, 255, 255, 0.5)",
                          borderRadius: "50%",
                        },
                      }}
                    />
                  ) : undefined
                }
                iconPosition="end"
              />
            ))}

            {addCallback && (
              <IconButton
                onClick={addCallback}
                sx={{
                  "&:hover": {
                    color: "green",
                    background: "rgba(255, 255, 255, 0.5)",
                    borderRadius: "50%",
                  },
                }}
              >
                <AddCircleOutlineIcon sx={{ color: "white" }} />
              </IconButton>
            )}
          </TabList>
        </Box>
        {tabLists.map(({ component, value }) => (
          <TabPanel key={value} value={value} sx={{ color: "white" }}>
            {component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};
