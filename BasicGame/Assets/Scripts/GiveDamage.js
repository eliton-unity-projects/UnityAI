#pragma strict

var characterHealth : CharacterHealth;

//function OnControllerColliderHit(hit : ControllerColliderHit){
//
//	characterHealth = GetComponent(CharacterHealth);
//
//	if (hit.collider.gameObject.name != "Floor")
//		Debug.Log(hit.collider.gameObject.tag + hit.collider.gameObject);
//	if (hit.collider.gameObject.tag == "Player"){
//		Debug.Log("hit");
//		if (characterHealth.hp)
//			characterHealth.hp--;
//	}
//}

function Start(){
	var player = GameObject.FindWithTag ("Player");
	characterHealth = player.GetComponent(CharacterHealth);

}

//function OnCollisionEnter (other : Collision) { 
//Debug.Log("collidinng");
//    if (other.gameObject.name == "FirstPersonController") {   
//    	Debug.Log("hit");
//       if (characterHealth.hp){
//			characterHealth.hp--;
//		}
//	}
//   } 

function OnTriggerEnter(other: Collider){
    if (other.tag == "Player"){
        //print(parent.name); // the parent is the item
        var player = other.gameObject; // the player is the "other" object
        // use the parent's name to find the script stacking
        if (characterHealth.hp){
			characterHealth.hp--;
		}
        }
    }