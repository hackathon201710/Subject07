import ApolloClient, {HttpLink} from 'apollo-client-preset';
import gql from 'graphql-tag';

import {StorageService} from "../storage/storageService";
import {Marker} from "../storage/model/marker";

export class SearchResult {
    constructor(public image: string, public markers: Marker[]) {
    }
}

export class CatClient {

    private apolloClient: ApolloClient;

    constructor() {
        this.apolloClient = new ApolloClient({
            link: new HttpLink({
                uri: 'http://192.168.0.65:3000/graphql',
            })
        });
        console.warn(new ApolloClient({
            link: new HttpLink({
                uri: 'http://192.168.0.65:3000/graphql',
            })
        }));
    }

    public addImage(data: String): void {
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
                StorageService.saveImage((<any>data).data.addImage.id)
            })
            .catch(error => console.error(error));
    }

    public getImage(id: string): Promise<SearchResult> {
        return this.apolloClient.query({
            query: gql`
                query {
                  image(id: "${id}") {
                    data
                    markers {
                        id
                        number
                        x
                        y
                        text                    
                    }
                  }
                }
              `,
        })
            .then(data => {
                return new SearchResult(
                    (<any>data).data.image.data,
                    (<any>data).data.image.markers
                );
            })
            .catch(error => console.error(error));
    }

    public addMarker(marker: Marker): Promise<string> {

        const imageID = StorageService.getLastImage();
        return this.apolloClient.mutate({
            mutation: gql`
                mutation {
                  addMarker(imageID:"${imageID}", number: ${marker.number}, x: ${marker.x}, y: ${marker.y}, text: "${marker.information}"){
                  id
                  }
                }
              `,
        })
            .then(data => {
                return (<any>data).data.addMarker.id;
            })
            .catch(error => console.error(error));
    }

    public updateMarkers(markers: Marker[]): void {
        const updatePromises = [];
        for (let marker of markers) {
            updatePromises.push(
                this.apolloClient.mutate({
                    mutation: gql`
                mutation {
                  updateMarker(id:"${marker.id}", number: ${marker.number} text: "${marker.information}"){
                    id
                  }
                }
              `,
                })
            );
            Promise.resolve(updatePromises)
                .catch(error => console.error(error));
        }
    }

    public removeMarker(markerId: string): void {
        this.apolloClient.mutate({
            mutation: gql`
                mutation {
                  removeMarker(id:"${markerId}"){
                  }
                }
              `,
        })
            .catch(error => console.error(error));
    }
}