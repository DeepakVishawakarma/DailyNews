/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { getTrendingNews, getNews, changeFilter } from '../actions';
import NewsItem from '../component/NewsItem';
import NewsHeader from '../component/NewsHeader';
import NewsFilter from '../component/NewsFilter';
import EmptyList from '../component/EmptyList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getTrendingNews, getNews } = this.props;
    getTrendingNews();
    getNews();
  }

  filterNews = (index) => {
    console.log('filterNews index', index);
    this.props.changeFilter(index);
  };

  goToDetail = (url) => {
    this.props.navigation.navigate('Detail', { webUrl: url });
  };

  render() {
    const {
      news,
      trendingLoading,
      loading,
      trendingNews,
      tabs,
      tabIndex,
    } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, marginVertical: 10 }}>
          {!trendingLoading ? (
            <View>
              <NewsHeader
                trendingNews={trendingNews}
                loading={trendingLoading}
              />
              <NewsFilter
                tabs={tabs}
                tabIndex={tabIndex}
                filterNews={this.filterNews}
              />
            </View>
          ) : (
            <EmptyList loading={trendingLoading} />
          )}
        </View>
        <View style={{ flex: 1, marginTop: 10 }}>
          <FlatList
            data={news}
            contentContainerStyle={{ paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
            renderItem={(props) => (
              <NewsItem {...props} goToDetail={this.goToDetail} />
            )}
            ListEmptyComponent={<EmptyList loading={loading} />}
            keyExtractor={(v, i) => `${v.id}${i}`}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps ~ state', state);
  const {
    trendingLoading,
    loading,
    news,
    trendingNews,
    tabs,
    tabIndex,
  } = state.newsReducer;
  return {
    tabs,
    news,
    trendingNews,
    trendingLoading,
    loading,
    tabIndex,
  };
};

export default connect(mapStateToProps, {
  getTrendingNews,
  getNews,
  changeFilter,
})(Home);
