import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import usePosts from "../../../hook/useFetch";
import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearByJobsCard/nearByJobs";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, isSuccess } = usePosts();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading && <ActivityIndicator size="large" color={COLORS.primary} />}
        {isSuccess &&
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.id}`}
              handleNavigate={() => router.push(`/job-details/${job.id}`)}
            />
          ))}
      </View>
    </View>
  );
};

export default Nearbyjobs;
