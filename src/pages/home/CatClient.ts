import ApolloClient, { HttpLink,  } from 'apollo-client-preset';
import gql from 'graphql-tag';

import {StorageService} from "../storage/storageService";

export class CatClient {

    private apolloClient: ApolloClient

    constructor() {
        this.apolloClient = new ApolloClient({
            link: new HttpLink({
                uri: 'http://192.168.0.65:3000/graphql',
            }),
        });
    }

    addImage(data: String) {
        this.apolloClient.mutate({
            mutation: gql`
                mutation {
                  addImage(data:"${data}"){
                    id
                  }
                }
              `,
        })
            .then(data => {
                console.log(data)
                StorageService.saveImage((<any>data).data.addImage.id)
            })
            .catch(error => console.error(error));
    }
}