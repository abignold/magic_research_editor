let save_data = null
function gunzipString(base64CompressedString) {
  try {
    // Decode the base64 string to a Uint8Array
    const compressedData = base64ToUint8Array(base64CompressedString);

    // Decompress the data using pako's inflate method
    const decompressedData = pako.inflate(compressedData);

    // Convert the decompressed data to a string
    const decompressedString = new TextDecoder().decode(decompressedData);

    return decompressedString;
  } catch (err) {
    console.error('Error during decompression:', err);
    return null;
  }
}

// Helper function to convert a base64 string to a Uint8Array
function base64ToUint8Array(base64String) {
  const binaryString = atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes;
}

function decode_and_gunzip(input) {
  // Decode input using Base64 twice
  let decoded1 = atob(input);
  
  gunzipped = gunzipString(decoded1);

  // Return the result
  return gunzipped;
}

function get_value_from_object(...keys) {
  try {
    let value = save_data;
    for (let key of keys) {
      value = value[key];
    }
    return value || 0;
  } catch (error) {
    return 0;
  }
}

function add_to_save(value, ...keys) {
  let current = save_data;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key]) {
      current[key] = {};
    }
    current = current[key];
  }
  current[keys[keys.length - 1]] = parseFloat(value);
}

function populate_tfields(){

  document.getElementById('stone').value = get_value_from_object('resources', 'Stone', 'current');
  document.getElementById('stone_cap').value = get_value_from_object('resources', 'Stone', 'cap');
  document.getElementById('wood').value = get_value_from_object('resources', 'Wood', 'current');
  document.getElementById('wood_cap').value = get_value_from_object('resources', 'Wood', 'cap');
  document.getElementById('iron').value = get_value_from_object('resources', 'Iron', 'current');
  document.getElementById('iron_cap').value = get_value_from_object('resources', 'Iron', 'cap');
  document.getElementById('water').value = get_value_from_object('resources', 'Water', 'current');
  document.getElementById('water_cap').value = get_value_from_object('resources', 'Water', 'cap');
  document.getElementById('monstium').value = get_value_from_object('resources', 'Monstium', 'current');
  document.getElementById('monstium_cap').value = get_value_from_object('resources', 'Monstium', 'cap');
  document.getElementById('coins').value = get_value_from_object('resources', 'Coins', 'current');
  document.getElementById('coins_cap').value = get_value_from_object('resources', 'Coins', 'cap');
  document.getElementById('mana').value = get_value_from_object('resources', 'Mana', 'current');
  document.getElementById('mana_cap').value = get_value_from_object('resources', 'Mana', 'cap');
  document.getElementById('time_pieces').value = get_value_from_object('resources', 'Time Pieces', 'current');
  document.getElementById('time_pieces_cap').value = get_value_from_object('resources', 'Time Pieces', 'cap');
  document.getElementById('tempreature').value = get_value_from_object('resources', 'Temperature', 'current');
  document.getElementById('tempreature_cap').value = get_value_from_object('resources', 'Temperature', 'cap');
  document.getElementById('electricity').value = get_value_from_object('resources', 'Electricity', 'current');
  document.getElementById('electricity_cap').value = get_value_from_object('resources', 'Electricity', 'cap');


  document.getElementById('time_capsule').value = get_value_from_object('buildings', 'Time Capsule', 'current');
  document.getElementById('mana_spout').value = get_value_from_object('buildings', 'Mana Spout', 'current');
  document.getElementById('mana_shard').value = get_value_from_object('buildings', 'Mana Shard', 'current');
  document.getElementById('lumber_yard').value = get_value_from_object('buildings', 'Lumber Yard', 'current');
  document.getElementById('warehouse').value = get_value_from_object('buildings', 'Warehouse', 'current');
  document.getElementById('water_tank').value = get_value_from_object('buildings', 'Water Tank', 'current');
  document.getElementById('vault').value = get_value_from_object('buildings', 'Vault', 'current');
  document.getElementById('mana_geyser').value = get_value_from_object('buildings', 'Mana Geyser', 'current');
  document.getElementById('apprentice_dorm').value = get_value_from_object('buildings', 'Apprentice Dorm', 'current');
  document.getElementById('mine').value = get_value_from_object('buildings', 'Mine', 'current');
  document.getElementById('canal').value = get_value_from_object('buildings', 'Canal', 'current');
  document.getElementById('monstruarium').value = get_value_from_object('buildings', 'Monstruarium', 'current');
  document.getElementById('researcher_cabin').value = get_value_from_object('buildings', 'Researcher Cabin', 'current');
  
  document.getElementById('furnace').value = get_value_from_object('buildings', 'Furnace', 'current');
  document.getElementById('creature_pen').value = get_value_from_object('buildings', 'Creature Pen', 'current');
  document.getElementById('mana_crystal').value = get_value_from_object('buildings', 'Mana Crystal', 'current');
  document.getElementById('generator').value = get_value_from_object('buildings', 'Generator', 'current');
  document.getElementById('researcher_villa').value = get_value_from_object('buildings', 'Researcher Villa', 'current');
  document.getElementById('electric_drill').value = get_value_from_object('buildings', 'Electric Drill', 'current');
  document.getElementById('electric_lamp').value = get_value_from_object('buildings', 'Electric Lamp', 'current');
  document.getElementById('electric_sawmill').value = get_value_from_object('buildings', 'Electric Sawmill', 'current');
  document.getElementById('electric_mana_fountain').value = get_value_from_object('buildings', 'Electric Mana Fountain', 'current');
  document.getElementById('mana_cascade').value = get_value_from_object('buildings', 'Mana Cascade', 'current');
  document.getElementById('mana_battery').value = get_value_from_object('buildings', 'Mana Battery', 'current');
  document.getElementById('dimensional_artifact').value = get_value_from_object('buildings', 'Dimensional Artifact', 'current');

  document.getElementById('creatures').value = get_value_from_object('creatures', 'totalCreatures');
  document.getElementById('researchers').value = get_value_from_object('research', 'totalResearchers');

  document.getElementById('conjuration_xp').value = get_value_from_object('schoolExperience', 'Conjuration');
  document.getElementById('enchantment_xp').value = get_value_from_object('schoolExperience', 'Enchantment');
  document.getElementById('illusion_xp').value = get_value_from_object('schoolExperience', 'Illusion');
  document.getElementById('alchemy_xp').value = get_value_from_object('schoolExperience', 'Alchemy');
  document.getElementById('evocation_xp').value = get_value_from_object('schoolExperience', 'Evocation');
  document.getElementById('protection_xp').value = get_value_from_object('schoolExperience', 'Protection');
  document.getElementById('breeding_xp').value = get_value_from_object('schoolExperience', 'Breeding');
  document.getElementById('summoning_xp').value = get_value_from_object('schoolExperience', 'Summoning');
  document.getElementById('divination_xp').value = get_value_from_object('schoolExperience', 'Divination');

  document.getElementById('conjuration_mpl').value = get_value_from_object('global', 'maxPrimarySchoolLevels', 'Conjuration');
  document.getElementById('enchantment_mpl').value = get_value_from_object('global', 'maxPrimarySchoolLevels', 'Enchantment');
  document.getElementById('illusion_mpl').value = get_value_from_object('global', 'maxPrimarySchoolLevels', 'Illusion');
  document.getElementById('alchemy_mpl').value = get_value_from_object('global', 'maxPrimarySchoolLevels', 'Alchemy');
  document.getElementById('evocation_mpl').value = get_value_from_object('global', 'maxPrimarySchoolLevels', 'Evocation');
  document.getElementById('protection_mpl').value = get_value_from_object('global', 'maxPrimarySchoolLevels', 'Protection');
  document.getElementById('breeding_mpl').value = get_value_from_object('global', 'maxPrimarySchoolLevels', 'Breeding');
  document.getElementById('summoning_mpl').value = get_value_from_object('global', 'maxPrimarySchoolLevels', 'Summoning');
  document.getElementById('divination_mpl').value = get_value_from_object('global', 'maxPrimarySchoolLevels', 'Divination');

  document.getElementById('current_hp').value = get_value_from_object('exploration', 'currentHP', '');

}

function extract_tfields(){
  add_to_save(document.getElementById('stone').value, 'resources', 'Stone', 'current');
  add_to_save(document.getElementById('stone_cap').value, 'resources', 'Stone', 'cap');
  add_to_save(document.getElementById('wood').value, 'resources', 'Wood', 'current');
  add_to_save(document.getElementById('wood_cap').value, 'resources', 'Wood', 'cap');
  add_to_save(document.getElementById('iron').value, 'resources', 'Iron', 'current');
  add_to_save(document.getElementById('iron_cap').value, 'resources', 'Iron', 'cap');
  add_to_save(document.getElementById('water').value, 'resources', 'Water', 'current');
  add_to_save(document.getElementById('water_cap').value, 'resources', 'Water', 'cap');
  add_to_save(document.getElementById('monstium').value, 'resources', 'Monstium', 'current');
  add_to_save(document.getElementById('monstium_cap').value, 'resources', 'Monstium', 'cap');
  add_to_save(document.getElementById('coins').value, 'resources', 'Coins', 'current');
  add_to_save(document.getElementById('coins_cap').value, 'resources', 'Coins', 'cap');
  add_to_save(document.getElementById('mana').value, 'resources', 'Mana', 'current');
  add_to_save(document.getElementById('mana_cap').value, 'resources', 'Mana', 'cap');
  add_to_save(document.getElementById('time_pieces').value, 'resources', 'Time Pieces', 'current');
  add_to_save(document.getElementById('time_pieces_cap').value, 'resources', 'Time Pieces', 'cap');
  
  add_to_save(document.getElementById('time_capsule').value, 'buildings', 'Time Capsule', 'current');
  add_to_save(document.getElementById('mana_spout').value, 'buildings', 'Mana Spout', 'current');
  add_to_save(document.getElementById('mana_shard').value, 'buildings', 'Mana Shard', 'current');
  add_to_save(document.getElementById('lumber_yard').value, 'buildings', 'Lumber Yard', 'current');
  add_to_save(document.getElementById('warehouse').value, 'buildings', 'Warehouse', 'current');
  add_to_save(document.getElementById('water_tank').value, 'buildings', 'Water Tank', 'current');
  add_to_save(document.getElementById('vault').value, 'buildings', 'Vault', 'current');
  add_to_save(document.getElementById('mana_geyser').value, 'buildings', 'Mana Geyser', 'current');
  add_to_save(document.getElementById('apprentice_dorm').value, 'buildings', 'Apprentice Dorm', 'current');
  add_to_save(document.getElementById('mine').value, 'buildings', 'Mine', 'current');
  add_to_save(document.getElementById('canal').value, 'buildings', 'Canal', 'current');
  add_to_save(document.getElementById('monstruarium').value, 'buildings', 'Monstruarium', 'current');
  add_to_save(document.getElementById('researcher_cabin').value, 'buildings', 'Researcher Cabin', 'current');
  
  add_to_save(document.getElementById('creatures').value, 'creatures', 'totalCreatures');
  add_to_save(document.getElementById('researchers').value, 'research', 'totalResearchers');
  
  add_to_save(document.getElementById('conjuration_xp').value, 'schoolExperience', 'Conjuration');
  add_to_save(document.getElementById('enchantment_xp').value, 'schoolExperience', 'Enchantment');
  add_to_save(document.getElementById('illusion_xp').value, 'schoolExperience', 'Illusion');
  add_to_save(document.getElementById('alchemy_xp').value, 'schoolExperience', 'Alchemy');
  add_to_save(document.getElementById('evocation_xp').value, 'schoolExperience', 'Evocation');
  add_to_save(document.getElementById('protection_xp').value, 'schoolExperience', 'Protection');
  add_to_save(document.getElementById('breeding_xp').value, 'schoolExperience', 'Breeding');
  add_to_save(document.getElementById('summoning_xp').value, 'schoolExperience', 'Summoning');
  add_to_save(document.getElementById('divination_xp').value, 'schoolExperience', 'Divination');
  
  add_to_save(document.getElementById('conjuration_mpl').value, 'global', 'maxPrimarySchoolLevels', 'Conjuration');
  add_to_save(document.getElementById('enchantment_mpl').value, 'global', 'maxPrimarySchoolLevels', 'Enchantment');
  add_to_save(document.getElementById('illusion_mpl').value, 'global', 'maxPrimarySchoolLevels', 'Illusion');
  add_to_save(document.getElementById('alchemy_mpl').value, 'global', 'maxPrimarySchoolLevels', 'Alchemy');
  add_to_save(document.getElementById('evocation_mpl').value, 'global', 'maxPrimarySchoolLevels', 'Evocation');
  add_to_save(document.getElementById('protection_mpl').value, 'global', 'maxPrimarySchoolLevels', 'Protection');
  add_to_save(document.getElementById('breeding_mpl').value, 'global', 'maxPrimarySchoolLevels', 'Breeding');
  add_to_save(document.getElementById('summoning_mpl').value, 'global', 'maxPrimarySchoolLevels', 'Summoning');
  add_to_save(document.getElementById('divination_mpl').value, 'global', 'maxPrimarySchoolLevels', 'Divination');

  add_to_save(document.getElementById('furnace').value, 'buildings', 'Furnace', 'current');
  add_to_save(document.getElementById('creature_pen').value, 'buildings', 'Creature Pen', 'current');
  add_to_save(document.getElementById('mana_crystal').value, 'buildings', 'Mana Crystal', 'current');
  add_to_save(document.getElementById('generator').value, 'buildings', 'Generator', 'current');
  add_to_save(document.getElementById('researcher_villa').value, 'buildings', 'Researcher Villa', 'current');
  add_to_save(document.getElementById('electric_drill').value, 'buildings', 'Electric Drill', 'current');
  add_to_save(document.getElementById('electric_lamp').value, 'buildings', 'Electric Lamp', 'current');
  add_to_save(document.getElementById('electric_sawmill').value, 'buildings', 'Electric Sawmill', 'current');
  add_to_save(document.getElementById('electric_mana_fountain').value, 'buildings', 'Electric Mana Fountain', 'current');
  add_to_save(document.getElementById('mana_cascade').value, 'buildings', 'Mana Cascade', 'current');
  add_to_save(document.getElementById('mana_battery').value, 'buildings', 'Mana Battery', 'current');
  add_to_save(document.getElementById('dimensional_artifact').value, 'buildings', 'Dimensional Artifact', 'current');

  add_to_save(document.getElementById('tempreature').value, 'resources', 'Temperature', 'current');
  add_to_save(document.getElementById('tempreature_cap').value, 'resources', 'Temperature', 'cap');
  add_to_save(document.getElementById('electricity').value, 'resources', 'Electricity', 'current');
  add_to_save(document.getElementById('electricity_cap').value, 'resources', 'Electricity', 'cap');
}


function handle_import() {
        // Get the input from the first text field
        let input = document.getElementById('import_field').value;

        // Decode and gunzip the input
        let result_json = decode_and_gunzip(input);
		save_data = JSON.parse(result_json)
		populate_tfields()

      }
	  

function gzipAndEncodeString(inputString) {
  try {
    // Convert the input string to a Uint8Array
    const inputData = new TextEncoder().encode(inputString);

    // Compress the data using pako's deflate method
    const compressedData = pako.gzip(inputData);

    // Encode the compressed data to a base64 string
    const base64CompressedString = uint8ArrayToBase64(compressedData);

    return base64CompressedString;
  } catch (err) {
    console.error('Error during compression:', err);
    return null;
  }
}

// Helper function to convert a Uint8Array to a base64 string
function uint8ArrayToBase64(uint8Array) {
  const binaryString = String.fromCharCode.apply(null, uint8Array);
  return btoa(binaryString);
}

function encode_and_gzip(input) {
  // Gzip and encode the input
  const gzippedAndEncoded = gzipAndEncodeString(input);

  // Double encode the result using Base64
  const doubleEncoded = btoa(gzippedAndEncoded);

  return doubleEncoded;
}

function handle_export() {
	extract_tfields();
	//result_json = JSON.stringify(save_data);
	result_json = JSON.stringify(save_data, (key, value) => typeof value === "number" ? value : value);

	//console.log(result_json);
	result = encode_and_gzip(result_json)
	document.getElementById('import_field').value = result
	
}