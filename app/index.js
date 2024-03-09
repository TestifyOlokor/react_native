import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SIZES } from "../constants";
import { useRouter } from "expo-router";
import { Welcome, Popularjobs, Nearbyjobs } from "@/components";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const Main = () => {
  const router = useRouter();
  const queryClient = new QueryClient();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </QueryClientProvider>
  );
};

export default Main;
