require "test_helper"

class MapSearchControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get map_search_index_url
    assert_response :success
  end
end
