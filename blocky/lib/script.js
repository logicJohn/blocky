/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.Trade} trade - the trade to be processed
 * @transaction
 
async function tradeCommodity(trade) {
  trade.commodity.owner = trade.newOwner;
  let assetRegistry = await getAssetRegistry('org.example.mynetwork.Commodity');
  await assetRegistry.update(trade.commodity);
}

async function updateDossier(consumer, update) {


}
*/

/**
 * Sample transaction processor function.
 * @param {org.acme.pii.SampleTransaction} tx The sample transaction instance.
 * @transaction
 */
async function sampleTransaction(tx) {
  // eslint-disable-line no-unused-vars

  // Save the old value of the asset.
  const cost = tx.asset.value;

  tx.asset.value += tx.newValue; //this would be the normal value added and deleted from both
  tx.buyer.balance = tx.buyer.balance - tx.asset.value;
  tx.seller.balance = tx.seller.balance + tx.asset.value;
  tx.server.balance = tx.server.balance + tx.asset.value;

  let buy = getParticipantRegistry("tx.buyer");
  let sel = getParticipantRegistry("tx.seller");
  let ser = getParticipantRegistry("tx.server");

  return getAssetRegistry("org.acme.pii.ConsumerInfo").then(function(
    assetRegistry
  ) {
    return assetRegistry.update(tx.asset);
  }); /*
     .then(function(buy) {
    return participantRegistry.update(tx.buyer); 
  })
     .then( function(sel) {
    return participantRegistry.update(tx.seller); 
  })
    .then(function(ser) {
    return participantRegistry.update(tx.server); 
  })
  // Emit an event for the modified asset.
/*
  let event = getFactory().newEvent('org.acme.pii', 'SampleEvent');
  event.asset = tx.asset;
  event.oldValue = cost;
  event.newValue = tx.newValue;
  emit(event);
*/
}
