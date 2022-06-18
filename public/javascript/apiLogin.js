
const configApi = () => {

    $.ajaxSetup({

        headers: {

            dataType: 'json'
        },

    });

};



//for sending data to the server
const sendPostRequest = (data = {}) => {
    return requestHandler('POST', data);
};

//for requesting data from the server
const sendGetRequest = (data = {}) => {
    return requestHandler('GET', data);
};

//for updating data on the server
const sendPutRequest = (data = {}) => {
    return requestHandler('PUT', data);
};

//for deleting data on the server
const sendDeleteRequest = (data = {}) => {
    return requestHandler('DELETE', data);
};

//data - NonNull, data can be empty
//responsible for sending the actual request to the server
const requestHandler = (requestType, data) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: requestType,
            url: 'http://localhost:7000/api/v1/patients/login',
            data: JSON.stringify(data),
            crossDomain: true,
            contentType: 'application/json',
            


            success: (result, textStatus, xhr) => {
                const code = xhr.status;
                if (code == 200) {
                    resolve(result);
            
                } 
                else {
                    reject("an unknown error occurred");
                   
                   
                };
            },
         
            error: (msg) => {
               
            
            }
        });
    });
};
