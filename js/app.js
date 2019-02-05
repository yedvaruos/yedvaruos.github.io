var app = angular.module("cvapp", []); 
app.controller("genericController", function($scope,$http) {
    $scope.details = {
        firstName : 'Sourav',
        lastName :  'Dey',
        resume : [
            {
                category : 'Profile Summary',
                id  :   'profile-summary',
                details : {
                    type : 'string',
                    values : 'B.Tech with above 3 years of experience in TCS.Worked on CRMS portal and customer comms for two different telecom domain projects.'
                }  
            },
            {
                category :  'Skills and Proficiency',
                id :  'skills-and-proficiency',
                details : {
                    type : 'points',
                    values : [
                        {
                            name : 'Languages known',
                            value : 'Java , HTML5/CSS3, XML, JavaScript, SQL'
                        },
                        {
                            name : 'Technologies',
                            value : 'Servlet/JSP/JSF, JDBC, DBMS/MySQL/Oracle, Bootstrap, JQUERY, AJAX'
                        }
                    ]
                }
            },
            {
                category :  'Experiences',
                id :    'experiences',
                details : {
                    type : 'table',
                    values : [
                        {
                            type : 'company',
                            name : 'TCS',
                            role :  'Application Developer',
                            period : 'Jul,2015 - present',
                            detail : [
                                {
                                    value : 'Work mainly based on Java and Spring framework'
                                },
                                {
                                    value : 'Developed and maintained several features of their existing as well as new web applications'
                                }
                            ]
                        }
                    ]
                }
            },
            {
                category :  'Education',
                id :    'education',
                details : {
                    type : 'table',
                    values : [
                        {
                            type:   'study',
                            name : 'WBUT ',
                            marks :  'CGPA: 7.85 / 10',
                            period : 'Jul,2011 - Jun,2015',
                            detail : 'Electronics and Communication Engineering'
                        },
                        {
                            type:   'study',
                            name : 'HS ',
                            marks :  'Percentage: 79%',
                            period : '2011',
                            detail : 'West Bengal Council of Higher Secondary Education'
                        },
                        {
                            type:   'study',
                            name : 'WBUT ',
                            marks :  'Percentage: 77%',
                            period : '2009',
                            detail : 'West Bengal Board of Secondary Education'
                        }
                    ]
                }
            }
        ]

    };
    // $http.get('js/details.json').then(function(response) {
    //     $scope.products = response.data;
    //  });
});