import { useState } from "react";
import { Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function CategoryLabels() {
  const nav = useNavigate();
  const tabs = [
    { value: "home", label: "Home", path: "/" },
    { value: "topics", label: "Topics", path: "/topics" },
    { value: "collections", label: "Collections", path: "/collections" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <Group position="center" spacing="xl" py="xl">
      {tabs.map((item) => (
        <Button
          className={`label ${activeTab === item.value ? "active" : ""}`}
          color="indigo"
          variant="subtle"
          radius="xl"
          size="md"
          key={item.label}
          onClick={() => {
            nav(item.path);
            setActiveTab(item.value);
          }}
        >
          {item.label}
        </Button>
      ))}
    </Group>
  );
}
