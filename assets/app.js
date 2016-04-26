angular.module("app",["ngRoute"]),angular.module("app",["ngRoute","toastr"]).controller("ApplicationCtrl",["$scope","$location","$window","UserSvc","toastr",function(e,n,t,o,r){if(e.$on("login",function(t,o){e.currentUser=o,n.path("/")}),e.logout=function(){delete e.currentUser,n.path("/"),window.sessionStorage.removeItem("token")},o.isLoggedIn()){o.getUser().then(function(n){e.currentUser=n})}}]),angular.module("app").controller("HomeCtrl",["$scope","$location","$window","UserSvc",function(e,n,t,o){if(o.isLoggedIn()){o.getUser().then(function(n){e.currentUser=n})}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(e,n){e.login=function(t,o){e.errorMsg="",n.login(t,o).then(function(n){e.$emit("login",n)},function(n){e.errorMsg="Incorrect username/password."})}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(e,n){e.register=function(t,o){n.register(t,o).then(function(n){e.$emit("login",n)})}}]),angular.module("app").config(["$routeProvider",function(e){e.when("/",{controller:"HomeCtrl",templateUrl:"/templates/home.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"})}]),angular.module("app").service("UserSvc",["$http",function(e){var n=this;n.getUser=function(){return e.get("/api/users").then(function(e){return e.data})},n.login=function(t,o){return e.post("/api/sessions",{username:t,password:o}).then(function(t){return window.sessionStorage.token=t.data,e.defaults.headers.common["x-auth"]=t.data,n.getUser()})},n.register=function(t,o){return e.post("/api/users",{username:t,password:o}).then(function(){return n.login(t,o)})},n.isLoggedIn=function(){var n=!1;return window.sessionStorage.token&&(e.defaults.headers.common["x-auth"]=window.sessionStorage.token,n=!0),n}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJob21lLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicmVnaXN0ZXIuY3RybC5qcyIsInJvdXRlcy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiJHdpbmRvdyIsIlVzZXJTdmMiLCJ0b2FzdHIiLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwicGF0aCIsImxvZ291dCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlzTG9nZ2VkSW4iLCJnZXRVc2VyIiwidGhlbiIsInJlc3BvbnNlIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXJyb3JNc2ciLCIkZW1pdCIsImVycm9yIiwicmVnaXN0ZXIiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsInNlcnZpY2UiLCIkaHR0cCIsInN2YyIsInRoaXMiLCJnZXQiLCJkYXRhIiwicG9zdCIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxPQUNFLFlDREZELFFBQUFDLE9BQUEsT0FBQSxVQUFBLFdBQ0FDLFdBQUEsbUJBQStCLFNBQUEsWUFBQSxVQUFBLFVBQUEsU0FBQSxTQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxHQVk3QixHQVhBSixFQUFBSyxJQUFBLFFBQUEsU0FBQUMsRUFBQUMsR0FDRVAsRUFBQVEsWUFBQUQsRUFDQU4sRUFBQVEsS0FBQSxPQUdGVCxFQUFBVSxPQUFBLGlCQUNDVixHQUFBLFlBQ0NDLEVBQUFRLEtBQUEsS0FDQUUsT0FBQUMsZUFBQUMsV0FBQSxVQUdGVixFQUFBVyxhQUNFLENBQUFYLEVBQUFZLFVBQUFDLEtBQUEsU0FBQUMsR0FDRWpCLEVBQUFRLFlBQUFTLFFDZk5wQixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsWUFBd0IsU0FBQSxZQUFBLFVBQUEsVUFBQSxTQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxHQUV0QixHQUFBQSxFQUFBVyxhQUNFLENBQUFYLEVBQUFZLFVBQUFDLEtBQUEsU0FBQUMsR0FDRWpCLEVBQUFRLFlBQUFTLFFDTE5wQixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBeUIsU0FBQSxVQUFBLFNBQUFDLEVBQUFHLEdBQ3ZCSCxFQUFBa0IsTUFBQSxTQUFBQyxFQUFBQyxHQUNDcEIsRUFBQXFCLFNBQUEsR0FDQ2xCLEVBQUFlLE1BQUFDLEVBQUFDLEdBQ0FKLEtBQUEsU0FBQVQsR0FDRVAsRUFBQXNCLE1BQUEsUUFBQWYsSUFDRixTQUFBZ0IsR0FDQ3ZCLEVBQUFxQixTQUFBLHFDQ1JMeEIsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGdCQUE0QixTQUFBLFVBQUEsU0FBQUMsRUFBQUcsR0FDMUJILEVBQUF3QixTQUFBLFNBQUFMLEVBQUFDLEdBQ0VqQixFQUFBcUIsU0FBQUwsRUFBQUMsR0FDQUosS0FBQSxTQUFBVCxHQUNFUCxFQUFBc0IsTUFBQSxRQUFBZixTQ0xOVixRQUFBQyxPQUFBLE9BQ0EyQixRQUFRLGlCQUFBLFNBQUFDLEdBQ05BLEVBQ0FDLEtBQUEsS0FBQTVCLFdBQUEsV0FBMEM2QixZQUFBLHlCQUMxQ0QsS0FBQSxhQUFBNUIsV0FBQSxlQUE4QzZCLFlBQUEsNkJBQzlDRCxLQUFBLFVBQUE1QixXQUFBLFlBQTJDNkIsWUFBQSw2QkNMN0MvQixRQUFBQyxPQUFBLE9BQ0ErQixRQUFBLFdBQW9CLFFBQUEsU0FBQUMsR0FDbEIsR0FBQUMsR0FBQUMsSUFDQUQsR0FBQWhCLFFBQUEsV0FDRSxNQUFBZSxHQUFBRyxJQUFBLGNBQ0FqQixLQUFBLFNBQUFDLEdBQ0UsTUFBQUEsR0FBQWlCLFFBR0pILEVBQUFiLE1BQUEsU0FBQUMsRUFBQUMsR0FDRSxNQUFBVSxHQUFBSyxLQUFBLGlCQUNFaEIsU0FBQUEsRUFBQUMsU0FBQUEsSUFDRkosS0FBQSxTQUFBQyxHQUdFLE1BRkFOLFFBQUFDLGVBQUF3QixNQUFBbkIsRUFBQWlCLEtBQ0FKLEVBQUFPLFNBQUFDLFFBQUFDLE9BQUEsVUFBQXRCLEVBQUFpQixLQUNBSCxFQUFBaEIsYUFHSmdCLEVBQUFQLFNBQUEsU0FBQUwsRUFBQUMsR0FDRSxNQUFBVSxHQUFBSyxLQUFBLGNBQ0VoQixTQUFBQSxFQUFBQyxTQUFBQSxJQUNGSixLQUFBLFdBQ0UsTUFBQWUsR0FBQWIsTUFBQUMsRUFBQUMsTUFHSlcsRUFBQWpCLFdBQUEsV0FDRSxHQUFBMEIsSUFBQSxDQUtBLE9BSkE3QixRQUFBQyxlQUFBd0IsUUFDRU4sRUFBQU8sU0FBQUMsUUFBQUMsT0FBQSxVQUFBNUIsT0FBQUMsZUFBQXdCLE1BQ0FJLEdBQUEsR0FFRkEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgJ25nUm91dGUnXG5dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZScsJ3RvYXN0ciddKVxuLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgJHdpbmRvdywgVXNlclN2YywgdG9hc3RyKSB7XG4gICRzY29wZS4kb24oJ2xvZ2luJywgZnVuY3Rpb24gKF8sIHVzZXIpIHtcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy8nKVxuICB9KVxuXG4gICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbigpe1xuICBcdGRlbGV0ZSgkc2NvcGUuY3VycmVudFVzZXIpIFxuICAgICRsb2NhdGlvbi5wYXRoKCcvJylcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICB9XG5cbiAgaWYoVXNlclN2Yy5pc0xvZ2dlZEluKCkpe1xuXHQgIFx0dmFyIHVzZXIgPSBVc2VyU3ZjLmdldFVzZXIoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHQgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gcmVzcG9uc2U7XG5cdCAgXHR9KVxuIFx0fVxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignSG9tZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sICR3aW5kb3csIFVzZXJTdmMpIHtcblxuICBpZihVc2VyU3ZjLmlzTG9nZ2VkSW4oKSl7XG5cdCAgXHR2YXIgdXNlciA9IFVzZXJTdmMuZ2V0VXNlcigpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdCAgICAkc2NvcGUuY3VycmVudFVzZXIgPSByZXNwb25zZTtcblx0ICBcdH0pXG4gXHR9XG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjKSB7XG4gICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgXHQkc2NvcGUuZXJyb3JNc2cgPSAnJztcbiAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHVzZXIpXG4gICAgfSwgZnVuY3Rpb24oZXJyb3Ipe1xuICAgIFx0JHNjb3BlLmVycm9yTXNnID0gXCJJbmNvcnJlY3QgdXNlcm5hbWUvcGFzc3dvcmQuXCI7XG4gICAgfSlcbiAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIFVzZXJTdmMucmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcbiAgICB9KVxuICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlclxuICAud2hlbignLycsICAgICAgICAgeyBjb250cm9sbGVyOiAnSG9tZUN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvaG9tZS5odG1sJyB9KVxuICAud2hlbignL3JlZ2lzdGVyJywgeyBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJywgdGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL3JlZ2lzdGVyLmh0bWwnIH0pXG4gIC53aGVuKCcvbG9naW4nLCAgICB7IGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvbG9naW4uaHRtbCcgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gIHZhciBzdmMgPSB0aGlzXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICB9XG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWyd4LWF1dGgnXSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpXG4gICAgfSlcbiAgfVxuICBzdmMucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlcnMnLCB7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgfSlcbiAgfVxuICBzdmMuaXNMb2dnZWRJbiA9IGZ1bmN0aW9uICgpe1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBpZih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pe1xuICAgICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ3gtYXV0aCddID0gd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuXG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9