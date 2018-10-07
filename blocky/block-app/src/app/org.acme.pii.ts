import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.pii{
   export class ConsumerInfo extends Asset {
      assetId: string;
      owner: Consumer;
      value: number;
   }
   export class Consumer extends Participant {
      consumerId: string;
      firstName: string;
      lastName: string;
      balance: number;
      favFood: string;
      favStore: string;
      favShoe: string;
      favWebsite: string;
   }
   export class Client extends Participant {
      clientId: string;
      clientName: string;
      balance: number;
   }
   export class Service extends Participant {
      serviceId: string;
      serviceName: string;
      balance: number;
   }
   export class Regulator extends Participant {
      regulatorId: string;
      regulatorName: string;
      regulatorOrginization: string;
   }
   export class SampleTransaction extends Transaction {
      buyer: Client;
      asset: ConsumerInfo;
      seller: Consumer;
      server: Service;
      newValue: number;
   }
   export class SampleEvent extends Event {
      buyer: Client;
      asset: ConsumerInfo;
      seller: Consumer;
      server: Service;
      oldValue: string;
      newValue: string;
   }
// }
