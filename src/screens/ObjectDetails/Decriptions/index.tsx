import { Text, View } from "react-native";
import { Description } from "../../../components/Description";

import type { ObjectProps } from "../../../services/objects/types";

export const descriptions = ({ data }: { data?: ObjectProps }) => {
  return [
    {
      id: 0,
      component: <Description label="Dated" value={data?.dated} />
    },
    {
      id: 1,
      component: <Description label="Credit" value={data?.creditline} />
    },
    {
      id: 2,
      component: <Description label="department" value={data?.department} />
    },
    {
      id: 3,
      component: <Description label="Division" value={data?.division} />
    },
    {
      id: 4,
      component: data && data && data.peoplecount > 0 ? (
        <>
          <Text className="m-1">
            People involved:
          </Text>
          {data.people.map(item => (
            <Text className="m-1 pl-3 font-semibold" key={item.personid}>
              {item.name}, {item.role}
            </Text>
          ))}
        </>
      ) : <></>
    },
    {
      id: 5,
      component: <Description label="Culture" value={data?.culture} />
    },
    {
      id: 6,
      component: <Description label="Classification" value={data?.classification} />
    },
    {
      id: 7,
      component: <Description label="Technique" value={data?.technique} />
    },
    {
      id: 8,
      component: data && data.colorcount > 0 ? (
        <View className="flex-row items-center m-1">
          <Text>Colors: </Text>
          {data.colors.map((color) => (
            <View
              key={color.color}
              className="w-5 h-5 rounded-full mx-1"
              style={{
                backgroundColor: color.color
              }}
            />
          ))}
        </View>
      ) : <></>
    }
  ];
};