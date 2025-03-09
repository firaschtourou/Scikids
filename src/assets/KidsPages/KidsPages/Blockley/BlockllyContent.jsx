import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { FieldColour } from '@blockly/field-colour'; // Importation correcte// Assurez-vous que le nom du fichier est correct


Blockly.Blocks['lists_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("list");
    this.setOutput(true, "Array");
    this.setColour("#FF661A"); // Couleur de la catégorie Lists
    this.setTooltip("Represents a list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "add thing to list"
Blockly.Blocks['lists_add'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("add");
    this.appendDummyInput()
        .appendField("to list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Add an item to the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "delete 1 of list"
Blockly.Blocks['lists_delete'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("delete")
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("of list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Delete an item at a specific index from the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "delete all of list"
Blockly.Blocks['lists_delete_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("delete all of list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Delete all items from the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "insert thing at 1 of list"
Blockly.Blocks['lists_insert'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("insert");
    this.appendDummyInput()
        .appendField("at")
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("of list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Insert an item at a specific index in the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "replace item 1 of list with thing"
Blockly.Blocks['lists_replace'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("replace item");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("of list with");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Replace an item at a specific index in the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "item 1 of list"
Blockly.Blocks['lists_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("item")
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("of list");
    this.setOutput(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Get an item at a specific index from the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "item # of thing in list"
Blockly.Blocks['lists_index_of'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("item # of");
    this.appendDummyInput()
        .appendField("in list");
    this.setOutput(true, "Number");
    this.setColour("#FF661A");
    this.setTooltip("Get the index of an item in the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "length of list"
Blockly.Blocks['lists_length'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("length of list");
    this.setOutput(true, "Number");
    this.setColour("#FF661A");
    this.setTooltip("Get the length of the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "list contains thing?"
Blockly.Blocks['lists_contains'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("list contains");
    this.appendDummyInput()
        .appendField("?");
    this.setOutput(true, "Boolean");
    this.setColour("#FF661A");
    this.setTooltip("Check if the list contains a specific item.");
    this.setHelpUrl("");
  }
};

// Bloc pour "show list"
Blockly.Blocks['lists_show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Show the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "hide list"
Blockly.Blocks['lists_hide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("hide list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Hide the list.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_my_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("my variable")
        .appendField(new Blockly.FieldVariable("item"), "VAR");
    this.setOutput(true, null);
    this.setColour("#FF8C1A"); // Couleur de la catégorie Lists
    this.setTooltip("Get the value of a variable.");
    this.setHelpUrl("");
  }
};

// Bloc pour "set my variable to 0"
Blockly.Blocks['lists_set_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("to");
    this.appendValueInput("VALUE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF8C1A");
    this.setTooltip("Set a variable to a specific value.");
    this.setHelpUrl("");
  }
};

// Bloc pour "change my variable by 1"
Blockly.Blocks['lists_change_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("change")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("by");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF8C1A");
    this.setTooltip("Change the value of a variable by a specified amount.");
    this.setHelpUrl("");
  }
};

// Bloc pour "show variable my variable"
Blockly.Blocks['lists_show_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show variable")
        .appendField(new Blockly.FieldVariable("item"), "VAR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF8C1A");
    this.setTooltip("Show the value of a variable.");
    this.setHelpUrl("");
  }
};

// Bloc pour "hide variable my variable"
Blockly.Blocks['lists_hide_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("hide variable")
        .appendField(new Blockly.FieldVariable("item"), "VAR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF8C1A");
    this.setTooltip("Hide the value of a variable.");
    this.setHelpUrl("");
  }
};

// Bloc pour "pick random 1 to 10"
Blockly.Blocks['operators_pick_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pick random")
        .appendField(new Blockly.FieldNumber(1), "FROM")
        .appendField("to")
        .appendField(new Blockly.FieldNumber(10), "TO");
    this.setOutput(true, "Number");
    this.setColour("#59C059"); // Couleur de la catégorie Operators
    this.setTooltip("Pick a random number between two values.");
    this.setHelpUrl("");
  }
};

// Bloc pour "="
Blockly.Blocks['operators_equals'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("RIGHT")
        .setCheck(null);
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Check if two values are equal.");
    this.setHelpUrl("");
  }
};

// Bloc pour "and"
Blockly.Blocks['operators_and'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("and");
    this.appendValueInput("RIGHT")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Logical AND operation.");
    this.setHelpUrl("");
  }
};

// Bloc pour "or"
Blockly.Blocks['operators_or'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("or");
    this.appendValueInput("RIGHT")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Logical OR operation.");
    this.setHelpUrl("");
  }
};

// Bloc pour "not"
Blockly.Blocks['operators_not'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("not");
    this.appendValueInput("BOOL")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Logical NOT operation.");
    this.setHelpUrl("");
  }
};

// Bloc pour "join apple banana"
Blockly.Blocks['operators_join'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("join");
    this.appendValueInput("RIGHT")
        .setCheck("String");
    this.setOutput(true, "String");
    this.setColour("#59C059");
    this.setTooltip("Join two strings together.");
    this.setHelpUrl("");
  }
};

// Bloc pour "letter 1 of apple"
Blockly.Blocks['operators_letter_of'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("letter")
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("of");
    this.setOutput(true, "String");
    this.setColour("#59C059");
    this.setTooltip("Get a specific letter from a string.");
    this.setHelpUrl("");
  }
};

// Bloc pour "length of apple"
Blockly.Blocks['operators_length'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("length of");
    this.setOutput(true, "Number");
    this.setColour("#59C059");
    this.setTooltip("Get the length of a string.");
    this.setHelpUrl("");
  }
};

// Bloc pour "apple contains a ?"
Blockly.Blocks['operators_contains'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("contains")
        .appendField(new Blockly.FieldTextInput("a"), "SUBSTRING");
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Check if a string contains a substring.");
    this.setHelpUrl("");
  }
};

// Bloc pour "mod"
Blockly.Blocks['operators_mod'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("mod");
    this.appendValueInput("RIGHT")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour("#59C059");
    this.setTooltip("Get the remainder of a division.");
    this.setHelpUrl("");
  }
};

// Bloc pour "round"
Blockly.Blocks['operators_round'] = {
  init: function() {
    this.appendValueInput("NUMBER")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("round");
    this.setOutput(true, "Number");
    this.setColour("#59C059");
    this.setTooltip("Round a number to the nearest integer.");
    this.setHelpUrl("");
  }
};

// Bloc pour "abs of"
Blockly.Blocks['operators_abs'] = {
  init: function() {
    this.appendValueInput("NUMBER")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("abs of");
    this.setOutput(true, "Number");
    this.setColour("#59C059");
    this.setTooltip("Get the absolute value of a number.");
    this.setHelpUrl("");
  }
};

// Définir les blocs personnalisés pour la catégorie Sensing
Blockly.Blocks['sensing_touching_mouse_pointer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("touching mouse-pointer?");
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if the sprite is touching the mouse-pointer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_touching_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("touching color?")
        .appendField(new FieldColour("#ff0000"), "COLOR"); // Utilisation correcte
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if the sprite is touching a specified color.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_color_is_touching'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("color is touching?")
        .appendField(new FieldColour("#ff0000"), "COLOR");
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if a specified color is touching another color.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_distance_to_mouse_pointer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("distance to mouse-pointer");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the distance to the mouse-pointer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_ask_and_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ask")
        .appendField(new Blockly.FieldTextInput("What's your name?"), "QUESTION")
        .appendField("and wait");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Ask a question and wait for an answer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_answer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("answer");
    this.setOutput(true, "String");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the answer to the last question asked.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_key_space_pressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key space pressed?");
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if the space key is pressed.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_mouse_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouse down?");
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if the mouse button is pressed.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_mouse_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouse x");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the x position of the mouse.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_mouse_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouse y");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the y position of the mouse.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_set_drag_mode_draggable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set drag mode draggable");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Set the drag mode to draggable.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_loudness'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("loudness");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the current loudness level.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("timer");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the current value of the timer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_reset_timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("reset timer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Reset the timer to zero.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_backdrop_number_of_stage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("backdrop # of stage");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the current backdrop number of the stage.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_current_year'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("current year");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the current year.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_days_since_2000'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("days since 2000");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the number of days since the year 2000.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_username'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("username");
    this.setOutput(true, "String");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the username of the current user.");
    this.setHelpUrl("");
  }
};




// Définir les blocs personnalisés pour la catégorie Looks
Blockly.Blocks['looks_say_for_seconds'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("say")
        .appendField(new Blockly.FieldTextInput("Hello!"), "MESSAGE");
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("for")
        .appendField(new Blockly.FieldNumber(2), "SECONDS")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Display a message for a specified number of seconds.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_say'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("say")
        .appendField(new Blockly.FieldTextInput("Hello!"), "MESSAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Display a message.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_think_for_seconds'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("think")
        .appendField(new Blockly.FieldTextInput("Hmm..."), "MESSAGE");
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("for")
        .appendField(new Blockly.FieldNumber(2), "SECONDS")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Display a thought bubble for a specified number of seconds.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_think'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("think")
        .appendField(new Blockly.FieldTextInput("Hmm..."), "MESSAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Display a thought bubble.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_switch_costume_to'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("switch costume to")
        .appendField(new Blockly.FieldDropdown([["costume1", "COSTUME1"], ["costume2", "COSTUME2"]]), "COSTUME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Switch to a specified costume.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_next_costume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("next costume");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Switch to the next costume.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_switch_backdrop_to'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("switch backdrop to")
        .appendField(new Blockly.FieldDropdown([["backdrop1", "BACKDROP1"], ["backdrop2", "BACKDROP2"]]), "BACKDROP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Switch to a specified backdrop.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_next_backdrop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("next backdrop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Switch to the next backdrop.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_change_size_by'] = {
  init: function() {
    this.appendValueInput("SIZE")
        .setCheck("Number")
        .appendField("change size by")
        .appendField(new Blockly.FieldNumber(10), "SIZE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Change the size by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_set_size_to'] = {
  init: function() {
    this.appendValueInput("SIZE")
        .setCheck("Number")
        .appendField("set size to")
        .appendField(new Blockly.FieldNumber(10), "SIZE")
        .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Set the size to a specified percentage.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_change_color_effect_by'] = {
  init: function() {
    this.appendValueInput("EFFECT")
        .setCheck("Number")
        .appendField("change color effect by")
        .appendField(new Blockly.FieldNumber(25), "EFFECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Change the color effect by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_set_color_effect_to'] = {
  init: function() {
    this.appendValueInput("EFFECT")
        .setCheck("Number")
        .appendField("set color effect to")
        .appendField(new Blockly.FieldNumber(25), "EFFECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Set the color effect to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_clear_graphic_effects'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("clear graphic effects");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Clear all graphic effects.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Show the sprite.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_hide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("hide");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Hide the sprite.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_go_to_front_layer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("go to front layer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Move the sprite to the front layer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_go_forward_layers'] = {
  init: function() {
    this.appendValueInput("LAYERS")
        .setCheck("Number")
        .appendField("go forward")
        .appendField(new Blockly.FieldNumber(1), "LAYERS")
        .appendField("layers");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Move the sprite forward by a specified number of layers.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_costume_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("costume number");
    this.setOutput(true, "Number");
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Get the current costume number.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_backdrop_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("backdrop number");
    this.setOutput(true, "Number");
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Get the current backdrop number.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("size");
    this.setOutput(true, "Number");
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Get the current size of the sprite.");
    this.setHelpUrl("");
  }
};


// Définir les blocs personnalisés pour la catégorie Control
Blockly.Blocks['control_wait'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("Wait")
        .appendField(new Blockly.FieldNumber(1), "SECONDS")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Wait for a specified number of seconds.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_repeat'] = {
  init: function() {
    this.appendValueInput("TIMES")
        .setCheck("Number")
        .appendField("Repeat")
        .appendField(new Blockly.FieldNumber(10), "TIMES");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Repeat the enclosed blocks a specified number of times.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_forever'] = {
  init: function() {
    this.appendStatementInput("DO")
        .appendField("forever");
    this.setPreviousStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Run the enclosed blocks indefinitely.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_if'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("DO")
        .appendField("then");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Execute the enclosed blocks if the condition is true.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_if_else'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("if");
    this.appendStatementInput("DO")
        .appendField("then");
    this.appendStatementInput("ELSE")
        .appendField("else");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Execute the first set of blocks if the condition is true, otherwise execute the second set.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_wait_until'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("wait until");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Wait until the condition is true.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_repeat_until'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("repeat until");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Repeat the enclosed blocks until the condition is true.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_stop_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop all");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Stop all scripts.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_when_start_as_clone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when I start as a clone");
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Triggered when a clone starts.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_create_clone_of_myself'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create clone of myself");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Create a clone of the current sprite.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_delete_this_clone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("delete this clone");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Delete the current clone.");
    this.setHelpUrl("");
  }
};




// Définir les blocs personnalisés pour la catégorie Motor
Blockly.Blocks['motor_move_steps'] = {
  init: function() {
    this.appendValueInput("STEPS")
        .setCheck("Number")
        .appendField("Move")
        .appendField(new Blockly.FieldNumber(0), "STEPS")
        .appendField("steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Move the motor by a specified number of steps.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_turn_degrees'] = {
  init: function() {
    this.appendValueInput("DEGREES")
        .setCheck("Number")
        .appendField("Turn")
        .appendField(new Blockly.FieldNumber(0), "DEGREES")
        .appendField("degrees");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Turn the motor by a specified number of degrees.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_go_to_random_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go to random position");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Move the motor to a random position.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_go_to_xy'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("Go to x:")
        .appendField(new Blockly.FieldNumber(0), "X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y:")
        .appendField(new Blockly.FieldNumber(0), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Move the motor to a specified x, y position.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_glide_to_random_position'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("Glide")
        .appendField(new Blockly.FieldNumber(1), "SECONDS")
        .appendField("secs to random position");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Glide the motor to a random position in a specified time.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_glide_to_xy'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("Glide")
        .appendField(new Blockly.FieldNumber(1), "SECONDS")
        .appendField("secs to x:");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField(new Blockly.FieldNumber(0), "X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y:")
        .appendField(new Blockly.FieldNumber(0), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Glide the motor to a specified x, y position in a specified time.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_point_in_direction'] = {
  init: function() {
    this.appendValueInput("DIRECTION")
        .setCheck("Number")
        .appendField("Point in direction")
        .appendField(new Blockly.FieldNumber(90), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Point the motor in a specified direction.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_point_towards'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Point towards")
        .appendField(new Blockly.FieldDropdown([["Mouse-pointer", "MOUSE_POINTER"]]), "TARGET");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Point the motor towards a target.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_change_x_by'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("Change x by")
        .appendField(new Blockly.FieldNumber(10), "X");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Change the x position of the motor by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_set_x_to'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("Set x to")
        .appendField(new Blockly.FieldNumber(10), "X");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Set the x position of the motor to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_change_y_by'] = {
  init: function() {
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Change y by")
        .appendField(new Blockly.FieldNumber(10), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Change the y position of the motor by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_set_y_to'] = {
  init: function() {
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Set y to")
        .appendField(new Blockly.FieldNumber(10), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Set the y position of the motor to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_if_on_edge_bounce'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("If on edge, bounce");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("If the motor is on the edge, bounce.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_set_rotation_style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set rotation style")
        .appendField(new Blockly.FieldDropdown([["Left-right", "LEFT_RIGHT"]]), "STYLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Set the rotation style of the motor.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_x_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("x position");
    this.setOutput(true, "Number");
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Get the x position of the motor.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_y_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("y position");
    this.setOutput(true, "Number");
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Get the y position of the motor.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("direction");
    this.setOutput(true, "Number");
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Get the direction of the motor.");
    this.setHelpUrl("");
  }
};

// Définir les blocs personnalisés pour la catégorie Events
Blockly.Blocks['event_when_clicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When clicked");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when the sprite is clicked.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_space_key_pressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When space key pressed");
    this.setNextStatement(true, null);
    this.setColour("#FFC909");
 // Couleur de la catégorie Events
    this.setTooltip("Triggered when the space key is pressed.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_this_sprite_clicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When this sprite clicked");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when this specific sprite is clicked.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_backdrop_switches'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When backdrop switches to")
        .appendField(new Blockly.FieldDropdown([["backdrop1", "BACKDROP1"]]), "BACKDROP");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when the backdrop switches to a specified one.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_loudness_greater_than'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When loudness >")
        .appendField(new Blockly.FieldNumber(10), "LOUDNESS");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when the loudness is greater than a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_receive_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When I receive")
        .appendField(new Blockly.FieldDropdown([["message1", "MESSAGE1"]]), "MESSAGE");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when a specified message is received.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_broadcast_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Broadcast")
        .appendField(new Blockly.FieldDropdown([["message1", "MESSAGE1"]]), "MESSAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Broadcast a specified message.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_broadcast_message_and_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Broadcast")
        .appendField(new Blockly.FieldDropdown([["message1", "MESSAGE1"]]), "MESSAGE")
        .appendField("and wait");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Broadcast a specified message and wait until it is handled.");
    this.setHelpUrl("");
  }
};

// Définir les blocs personnalisés pour la catégorie Sound
Blockly.Blocks['sound_play_until_done'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play sound until done")
        .appendField(new Blockly.FieldDropdown([["sound1", "SOUND1"]]), "SOUND");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Play a sound until it finishes.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_start_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start sound")
        .appendField(new Blockly.FieldDropdown([["sound1", "SOUND1"]]), "SOUND");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Start playing a sound.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_stop_all_sounds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop all sounds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Stop all currently playing sounds.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_change_pitch_effect_by'] = {
  init: function() {
    this.appendValueInput("PITCH")
        .setCheck("Number")
        .appendField("Change pitch effect by")
        .appendField(new Blockly.FieldNumber(10), "PITCH");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Change the pitch effect by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_set_pitch_effect_to'] = {
  init: function() {
    this.appendValueInput("PITCH")
        .setCheck("Number")
        .appendField("Set pitch effect to")
        .appendField(new Blockly.FieldNumber(10), "PITCH");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Set the pitch effect to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_clear_sound_effects'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear sound effects");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Clear all sound effects.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_change_volume_by'] = {
  init: function() {
    this.appendValueInput("VOLUME")
        .setCheck("Number")
        .appendField("Change volume by")
        .appendField(new Blockly.FieldNumber(-10), "VOLUME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Change the volume by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_set_volume_to'] = {
  init: function() {
    this.appendValueInput("VOLUME")
        .setCheck("Number")
        .appendField("Set volume to")
        .appendField(new Blockly.FieldNumber(-10), "VOLUME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Set the volume to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_volume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Volume");
    this.setOutput(true, "Number");
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Get the current volume.");
    this.setHelpUrl("");
  }
};


// Définir les générateurs de code pour les blocs Motor
javascriptGenerator.forBlock['motor_move_steps'] = function(block, generator) {
  const steps = block.getFieldValue('STEPS');
  return `moveSteps(${steps});\n`;
};

javascriptGenerator.forBlock['motor_turn_degrees'] = function(block, generator) {
  const degrees = block.getFieldValue('DEGREES');
  return `turnDegrees(${degrees});\n`;
};

javascriptGenerator.forBlock['motor_go_to_random_position'] = function(block, generator) {
  return `goToRandomPosition();\n`;
};

javascriptGenerator.forBlock['motor_go_to_xy'] = function(block, generator) {
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  return `goToXY(${x}, ${y});\n`;
};

javascriptGenerator.forBlock['motor_glide_to_random_position'] = function(block, generator) {
  const seconds = block.getFieldValue('SECONDS');
  return `glideToRandomPosition(${seconds});\n`;
};

javascriptGenerator.forBlock['motor_glide_to_xy'] = function(block, generator) {
  const seconds = block.getFieldValue('SECONDS');
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  return `glideToXY(${seconds}, ${x}, ${y});\n`;
};

javascriptGenerator.forBlock['motor_point_in_direction'] = function(block, generator) {
  const direction = block.getFieldValue('DIRECTION');
  return `pointInDirection(${direction});\n`;
};

javascriptGenerator.forBlock['motor_point_towards'] = function(block, generator) {
  const target = block.getFieldValue('TARGET');
  return `pointTowards(${target});\n`;
};

javascriptGenerator.forBlock['motor_change_x_by'] = function(block, generator) {
  const x = block.getFieldValue('X');
  return `changeXBy(${x});\n`;
};

javascriptGenerator.forBlock['motor_set_x_to'] = function(block, generator) {
  const x = block.getFieldValue('X');
  return `setXTo(${x});\n`;
};

javascriptGenerator.forBlock['motor_change_y_by'] = function(block, generator) {
  const y = block.getFieldValue('Y');
  return `changeYBy(${y});\n`;
};

javascriptGenerator.forBlock['motor_set_y_to'] = function(block, generator) {
  const y = block.getFieldValue('Y');
  return `setYTo(${y});\n`;
};

javascriptGenerator.forBlock['motor_if_on_edge_bounce'] = function(block, generator) {
  return `ifOnEdgeBounce();\n`;
};

javascriptGenerator.forBlock['motor_set_rotation_style'] = function(block, generator) {
  const style = block.getFieldValue('STYLE');
  return `setRotationStyle(${style});\n`;
};

javascriptGenerator.forBlock['motor_x_position'] = function(block, generator) {
  return [`xPosition()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['motor_y_position'] = function(block, generator) {
  return [`yPosition()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['motor_direction'] = function(block, generator) {
  return [`direction()`, javascriptGenerator.ORDER_ATOMIC];
};

// Définir les générateurs de code pour les blocs Events
javascriptGenerator.forBlock['event_when_clicked'] = function(block, generator) {
  return `whenClicked();\n`;
};

javascriptGenerator.forBlock['event_when_space_key_pressed'] = function(block, generator) {
  return `whenSpaceKeyPressed();\n`;
};

javascriptGenerator.forBlock['event_when_this_sprite_clicked'] = function(block, generator) {
  return `whenThisSpriteClicked();\n`;
};

javascriptGenerator.forBlock['event_when_backdrop_switches'] = function(block, generator) {
  const backdrop = block.getFieldValue('BACKDROP');
  return `whenBackdropSwitchesTo("${backdrop}");\n`;
};

javascriptGenerator.forBlock['event_when_loudness_greater_than'] = function(block, generator) {
  const loudness = block.getFieldValue('LOUDNESS');
  return `whenLoudnessGreaterThan(${loudness});\n`;
};

javascriptGenerator.forBlock['event_when_receive_message'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `whenReceiveMessage("${message}");\n`;
};

javascriptGenerator.forBlock['event_broadcast_message'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `broadcastMessage("${message}");\n`;
};

javascriptGenerator.forBlock['event_broadcast_message_and_wait'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `broadcastMessageAndWait("${message}");\n`;
};

// Définir les générateurs de code pour les blocs Sound
javascriptGenerator.forBlock['sound_play_until_done'] = function(block, generator) {
  const sound = block.getFieldValue('SOUND');
  return `playSoundUntilDone("${sound}");\n`;
};

javascriptGenerator.forBlock['sound_start_sound'] = function(block, generator) {
  const sound = block.getFieldValue('SOUND');
  return `startSound("${sound}");\n`;
};

javascriptGenerator.forBlock['sound_stop_all_sounds'] = function(block, generator) {
  return `stopAllSounds();\n`;
};

javascriptGenerator.forBlock['sound_change_pitch_effect_by'] = function(block, generator) {
  const pitch = block.getFieldValue('PITCH');
  return `changePitchEffectBy(${pitch});\n`;
};

javascriptGenerator.forBlock['sound_set_pitch_effect_to'] = function(block, generator) {
  const pitch = block.getFieldValue('PITCH');
  return `setPitchEffectTo(${pitch});\n`;
};

javascriptGenerator.forBlock['sound_clear_sound_effects'] = function(block, generator) {
  return `clearSoundEffects();\n`;
};

javascriptGenerator.forBlock['sound_change_volume_by'] = function(block, generator) {
  const volume = block.getFieldValue('VOLUME');
  return `changeVolumeBy(${volume});\n`;
};

javascriptGenerator.forBlock['sound_set_volume_to'] = function(block, generator) {
  const volume = block.getFieldValue('VOLUME');
  return `setVolumeTo(${volume});\n`;
};

javascriptGenerator.forBlock['sound_volume'] = function(block, generator) {
  return [`volume()`, javascriptGenerator.ORDER_ATOMIC];
};
// Définir les générateurs de code pour les blocs Control
javascriptGenerator.forBlock['control_wait'] = function(block, generator) {
  const seconds = generator.valueToCode(block, 'SECONDS', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `wait(${seconds});\n`;
};

javascriptGenerator.forBlock['control_repeat'] = function(block, generator) {
  const times = generator.valueToCode(block, 'TIMES', javascriptGenerator.ORDER_ATOMIC) || 0;
  const doCode = generator.statementToCode(block, 'DO');
  return `for (let i = 0; i < ${times}; i++) {\n${doCode}}\n`;
};

javascriptGenerator.forBlock['control_forever'] = function(block, generator) {
  const doCode = generator.statementToCode(block, 'DO');
  return `while (true) {\n${doCode}}\n`;
};

javascriptGenerator.forBlock['control_if'] = function(block, generator) {
  const condition = generator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC) || 'false';
  const doCode = generator.statementToCode(block, 'DO');
  return `if (${condition}) {\n${doCode}}\n`;
};

javascriptGenerator.forBlock['control_if_else'] = function(block, generator) {
  const condition = generator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC) || 'false';
  const doCode = generator.statementToCode(block, 'DO');
  const elseCode = generator.statementToCode(block, 'ELSE');
  return `if (${condition}) {\n${doCode}} else {\n${elseCode}}\n`;
};

javascriptGenerator.forBlock['control_wait_until'] = function(block, generator) {
  const condition = generator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC) || 'false';
  return `while (!(${condition})) {}\n`;
};

javascriptGenerator.forBlock['control_repeat_until'] = function(block, generator) {
  const condition = generator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC) || 'false';
  const doCode = generator.statementToCode(block, 'DO');
  return `while (!(${condition})) {\n${doCode}}\n`;
};

javascriptGenerator.forBlock['control_stop_all'] = function(block, generator) {
  return `stopAll();\n`;
};

javascriptGenerator.forBlock['control_when_start_as_clone'] = function(block, generator) {
  return `whenStartAsClone();\n`;
};

javascriptGenerator.forBlock['control_create_clone_of_myself'] = function(block, generator) {
  return `createCloneOfMyself();\n`;
};

javascriptGenerator.forBlock['control_delete_this_clone'] = function(block, generator) {
  return `deleteThisClone();\n`;
};

// Définir les générateurs de code pour les blocs Looks
javascriptGenerator.forBlock['looks_say_for_seconds'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  const seconds = generator.valueToCode(block, 'SECONDS', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `sayForSeconds("${message}", ${seconds});\n`;
};

javascriptGenerator.forBlock['looks_say'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `say("${message}");\n`;
};

javascriptGenerator.forBlock['looks_think_for_seconds'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  const seconds = generator.valueToCode(block, 'SECONDS', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `thinkForSeconds("${message}", ${seconds});\n`;
};

javascriptGenerator.forBlock['looks_think'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `think("${message}");\n`;
};

javascriptGenerator.forBlock['looks_switch_costume_to'] = function(block, generator) {
  const costume = block.getFieldValue('COSTUME');
  return `switchCostumeTo("${costume}");\n`;
};

javascriptGenerator.forBlock['looks_next_costume'] = function(block, generator) {
  return `nextCostume();\n`;
};

javascriptGenerator.forBlock['looks_switch_backdrop_to'] = function(block, generator) {
  const backdrop = block.getFieldValue('BACKDROP');
  return `switchBackdropTo("${backdrop}");\n`;
};

javascriptGenerator.forBlock['looks_next_backdrop'] = function(block, generator) {
  return `nextBackdrop();\n`;
};

javascriptGenerator.forBlock['looks_change_size_by'] = function(block, generator) {
  const size = generator.valueToCode(block, 'SIZE', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `changeSizeBy(${size});\n`;
};

javascriptGenerator.forBlock['looks_set_size_to'] = function(block, generator) {
  const size = generator.valueToCode(block, 'SIZE', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `setSizeTo(${size});\n`;
};

javascriptGenerator.forBlock['looks_change_color_effect_by'] = function(block, generator) {
  const effect = generator.valueToCode(block, 'EFFECT', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `changeColorEffectBy(${effect});\n`;
};

javascriptGenerator.forBlock['looks_set_color_effect_to'] = function(block, generator) {
  const effect = generator.valueToCode(block, 'EFFECT', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `setColorEffectTo(${effect});\n`;
};

javascriptGenerator.forBlock['looks_clear_graphic_effects'] = function(block, generator) {
  return `clearGraphicEffects();\n`;
};

javascriptGenerator.forBlock['looks_show'] = function(block, generator) {
  return `show();\n`;
};

javascriptGenerator.forBlock['looks_hide'] = function(block, generator) {
  return `hide();\n`;
};

javascriptGenerator.forBlock['looks_go_to_front_layer'] = function(block, generator) {
  return `goToFrontLayer();\n`;
};

javascriptGenerator.forBlock['looks_go_forward_layers'] = function(block, generator) {
  const layers = generator.valueToCode(block, 'LAYERS', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `goForwardLayers(${layers});\n`;
};

javascriptGenerator.forBlock['looks_costume_number'] = function(block, generator) {
  return [`costumeNumber()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['looks_backdrop_number'] = function(block, generator) {
  return [`backdropNumber()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['looks_size'] = function(block, generator) {
  return [`size()`, javascriptGenerator.ORDER_ATOMIC];
};

// Définir les générateurs de code pour les blocs Sensing
javascriptGenerator.forBlock['sensing_touching_mouse_pointer'] = function(block, generator) {
  return [`touchingMousePointer()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_touching_color'] = function(block, generator) {
  const color = block.getFieldValue('COLOR');
  return [`touchingColor("${color}")`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_color_is_touching'] = function(block, generator) {
  const color = block.getFieldValue('COLOR');
  return [`colorIsTouching("${color}")`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_distance_to_mouse_pointer'] = function(block, generator) {
  return [`distanceToMousePointer()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_ask_and_wait'] = function(block, generator) {
  const question = block.getFieldValue('QUESTION');
  return `askAndWait("${question}");\n`;
};

javascriptGenerator.forBlock['sensing_answer'] = function(block, generator) {
  return [`answer()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_key_space_pressed'] = function(block, generator) {
  return [`keySpacePressed()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_mouse_down'] = function(block, generator) {
  return [`mouseDown()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_mouse_x'] = function(block, generator) {
  return [`mouseX()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_mouse_y'] = function(block, generator) {
  return [`mouseY()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_set_drag_mode_draggable'] = function(block, generator) {
  return `setDragModeDraggable();\n`;
};

javascriptGenerator.forBlock['sensing_loudness'] = function(block, generator) {
  return [`loudness()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_timer'] = function(block, generator) {
  return [`timer()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_reset_timer'] = function(block, generator) {
  return `resetTimer();\n`;
};

javascriptGenerator.forBlock['sensing_backdrop_number_of_stage'] = function(block, generator) {
  return [`backdropNumberOfStage()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_current_year'] = function(block, generator) {
  return [`currentYear()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_days_since_2000'] = function(block, generator) {
  return [`daysSince2000()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_username'] = function(block, generator) {
  return [`username()`, javascriptGenerator.ORDER_ATOMIC];
};
javascriptGenerator.forBlock['operators_pick_random'] = function(block, generator) {
  const from = block.getFieldValue('FROM');
  const to = block.getFieldValue('TO');
  return [`Math.floor(Math.random() * (${to} - ${from} + 1)) + ${from}`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['operators_equals'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_EQUALITY) || '0';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_EQUALITY) || '0';
  return [`${left} === ${right}`, javascriptGenerator.ORDER_EQUALITY];
};

javascriptGenerator.forBlock['operators_and'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_LOGICAL_AND) || 'false';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_LOGICAL_AND) || 'false';
  return [`${left} && ${right}`, javascriptGenerator.ORDER_LOGICAL_AND];
};

javascriptGenerator.forBlock['operators_or'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_LOGICAL_OR) || 'false';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_LOGICAL_OR) || 'false';
  return [`${left} || ${right}`, javascriptGenerator.ORDER_LOGICAL_OR];
};

javascriptGenerator.forBlock['operators_not'] = function(block, generator) {
  const bool = generator.valueToCode(block, 'BOOL', javascriptGenerator.ORDER_LOGICAL_NOT) || 'false';
  return [`!${bool}`, javascriptGenerator.ORDER_LOGICAL_NOT];
};

javascriptGenerator.forBlock['operators_join'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_ADDITION) || '""';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_ADDITION) || '""';
  return [`${left} + ${right}`, javascriptGenerator.ORDER_ADDITION];
};

javascriptGenerator.forBlock['operators_letter_of'] = function(block, generator) {
  const str = generator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_MEMBER) || '""';
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return [`${str}.charAt(${index})`, javascriptGenerator.ORDER_MEMBER];
};

javascriptGenerator.forBlock['operators_length'] = function(block, generator) {
  const str = generator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_MEMBER) || '""';
  return [`${str}.length`, javascriptGenerator.ORDER_MEMBER];
};

javascriptGenerator.forBlock['operators_contains'] = function(block, generator) {
  const str = generator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_RELATIONAL) || '""';
  const substring = block.getFieldValue('SUBSTRING');
  return [`${str}.includes("${substring}")`, javascriptGenerator.ORDER_RELATIONAL];
};

javascriptGenerator.forBlock['operators_mod'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_MODULUS) || '0';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_MODULUS) || '1';
  return [`${left} % ${right}`, javascriptGenerator.ORDER_MODULUS];
};

javascriptGenerator.forBlock['operators_round'] = function(block, generator) {
  const number = generator.valueToCode(block, 'NUMBER', javascriptGenerator.ORDER_FUNCTION_CALL) || '0';
  return [`Math.round(${number})`, javascriptGenerator.ORDER_FUNCTION_CALL];
};

javascriptGenerator.forBlock['operators_abs'] = function(block, generator) {
  const number = generator.valueToCode(block, 'NUMBER', javascriptGenerator.ORDER_FUNCTION_CALL) || '0';
  return [`Math.abs(${number})`, javascriptGenerator.ORDER_FUNCTION_CALL];
};
javascriptGenerator.forBlock['lists_my_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [variable, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_set_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const value = generator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ASSIGNMENT) || '0';
  return `${variable} = ${value};\n`;
};

javascriptGenerator.forBlock['lists_change_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const value = generator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ADDITION) || '0';
  return `${variable} += ${value};\n`;
};

javascriptGenerator.forBlock['lists_show_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return `console.log(${variable});\n`; // Affiche la variable dans la console
};

javascriptGenerator.forBlock['lists_hide_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return `// Hide ${variable} (no action needed in JavaScript)\n`; // Aucune action nécessaire pour "cacher" en JavaScript
};
javascriptGenerator.forBlock['lists_list'] = function(block, generator) {
  return ['[]', javascriptGenerator.ORDER_ATOMIC]; // Représente une liste vide
};

javascriptGenerator.forBlock['lists_add'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_ADDITION) || 'null';
  return `list.push(${item});\n`;
};

javascriptGenerator.forBlock['lists_delete'] = function(block, generator) {
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return `list.splice(${index}, 1);\n`;
};

javascriptGenerator.forBlock['lists_delete_all'] = function(block, generator) {
  return `list = [];\n`;
};

javascriptGenerator.forBlock['lists_insert'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_ADDITION) || 'null';
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return `list.splice(${index}, 0, ${item});\n`;
};

javascriptGenerator.forBlock['lists_replace'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_ADDITION) || 'null';
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return `list[${index}] = ${item};\n`;
};

javascriptGenerator.forBlock['lists_get'] = function(block, generator) {
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return [`list[${index}]`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_index_of'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_RELATIONAL) || 'null';
  return [`list.indexOf(${item})`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_length'] = function(block, generator) {
  return [`list.length`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_contains'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_RELATIONAL) || 'null';
  return [`list.includes(${item})`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_show'] = function(block, generator) {
  return `console.log(list);\n`; // Affiche la liste dans la console
};

javascriptGenerator.forBlock['lists_hide'] = function(block, generator) {
  return `// Hide list (no action needed in JavaScript)\n`; // Aucune action nécessaire pour "cacher" en JavaScript
};
const BlocklyComponent = ({ selectedCategory }) => {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);

  useEffect(() => {
    if (!blocklyDiv.current) return;

    // Créez la toolbox initiale
    const toolboxXml = getToolboxXML(selectedCategory);

    // Injectez Blockly avec la toolbox initiale
    const workspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolboxXml,
      scrollbars: true,
      trashcan: true,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
      },
    });

    workspaceRef.current = workspace;

    // Écoutez les changements dans l'espace de travail
    workspace.addChangeListener(() => {
      const code = javascriptGenerator.workspaceToCode(workspace);
      console.log(code); // Vous pouvez remplacer ceci par un callback si nécessaire
    });

    // Nettoyez l'espace de travail lors du démontage
    return () => {
      workspace.dispose();
    };
  }, []); // Ne pas dépendre de selectedCategory ici

  useEffect(() => {
    if (workspaceRef.current && selectedCategory) {
      // Mettez à jour la toolbox lorsque selectedCategory change
      const toolboxXml = getToolboxXML(selectedCategory);
      workspaceRef.current.updateToolbox(toolboxXml);
    }
  }, [selectedCategory]);

  const getToolboxXML = (category) => {
    switch (category) {
      case 'Motor':

        return `
          <xml>
            <category name="Motor" colour="#4C97FF">
              <block type="motor_move_steps"></block>
              <block type="motor_turn_degrees"></block>
              <block type="motor_go_to_random_position"></block>
              <block type="motor_go_to_xy"></block>
              <block type="motor_glide_to_random_position"></block>
              <block type="motor_glide_to_xy"></block>
              <block type="motor_point_in_direction"></block>
              <block type="motor_point_towards"></block>
              <block type="motor_change_x_by"></block>
              <block type="motor_set_x_to"></block>
              <block type="motor_change_y_by"></block>
              <block type="motor_set_y_to"></block>
              <block type="motor_if_on_edge_bounce"></block>
              <block type="motor_set_rotation_style"></block>
              <block type="motor_x_position"></block>
              <block type="motor_y_position"></block>
              <block type="motor_direction"></block>
            </category>
          </xml>
        `;
      case 'Events':
        return `
          <xml>
            <category name="Events" colour="#FFC909">
              <block type="event_when_clicked"></block>
              <block type="event_when_space_key_pressed"></block>
              <block type="event_when_this_sprite_clicked"></block>
              <block type="event_when_backdrop_switches"></block>
              <block type="event_when_loudness_greater_than"></block>
              <block type="event_when_receive_message"></block>
              <block type="event_broadcast_message"></block>
              <block type="event_broadcast_message_and_wait"></block>
            </category>
          </xml>
        `;
      case 'Sound':
        return `
          <xml>
            <category name="Sound" colour="#CF63CF">
              <block type="sound_play_until_done"></block>
              <block type="sound_start_sound"></block>
              <block type="sound_stop_all_sounds"></block>
              <block type="sound_change_pitch_effect_by"></block>
              <block type="sound_set_pitch_effect_to"></block>
              <block type="sound_clear_sound_effects"></block>
              <block type="sound_change_volume_by"></block>
              <block type="sound_set_volume_to"></block>
              <block type="sound_volume"></block>
            </category>
          </xml>
        `;
      case 'Control':
        return `
          <xml>
            <category name="Control" colour="#FFAB19">
              <block type="control_wait"></block>
              <block type="control_repeat"></block>
              <block type="control_forever"></block>
              <block type="control_if"></block>
              <block type="control_if_else"></block>
              <block type="control_wait_until"></block>
              <block type="control_repeat_until"></block>
              <block type="control_stop_all"></block>
              <block type="control_when_start_as_clone"></block>
              <block type="control_create_clone_of_myself"></block>
              <block type="control_delete_this_clone"></block>
            </category>
          </xml>
        `;
      case 'Looks':
        return `
          <xml>
            <category name="Looks" colour="#9966FF">
              <block type="looks_say_for_seconds"></block>
              <block type="looks_say"></block>
              <block type="looks_think_for_seconds"></block>
              <block type="looks_think"></block>
              <block type="looks_switch_costume_to"></block>
              <block type="looks_next_costume"></block>
              <block type="looks_switch_backdrop_to"></block>
              <block type="looks_next_backdrop"></block>
              <block type="looks_change_size_by"></block>
              <block type="looks_set_size_to"></block>
              <block type="looks_change_color_effect_by"></block>
              <block type="looks_set_color_effect_to"></block>
              <block type="looks_clear_graphic_effects"></block>
              <block type="looks_show"></block>
              <block type="looks_hide"></block>
              <block type="looks_go_to_front_layer"></block>
              <block type="looks_go_forward_layers"></block>
              <block type="looks_costume_number"></block>
              <block type="looks_backdrop_number"></block>
              <block type="looks_size"></block>
            </category>
          </xml>
        `;
      case 'Sensing':
        return `
          <xml>
            <category name="Sensing" colour="#5CB1D6">
              <block type="sensing_touching_mouse_pointer"></block>
              <block type="sensing_touching_color"></block>
              <block type="sensing_color_is_touching"></block>
              <block type="sensing_distance_to_mouse_pointer"></block>
              <block type="sensing_ask_and_wait"></block>
              <block type="sensing_answer"></block>
              <block type="sensing_key_space_pressed"></block>
              <block type="sensing_mouse_down"></block>
              <block type="sensing_mouse_x"></block>
              <block type="sensing_mouse_y"></block>
              <block type="sensing_set_drag_mode_draggable"></block>
              <block type="sensing_loudness"></block>
              <block type="sensing_timer"></block>
              <block type="sensing_reset_timer"></block>
              <block type="sensing_backdrop_number_of_stage"></block>
              <block type="sensing_current_year"></block>
              <block type="sensing_days_since_2000"></block>
              <block type="sensing_username"></block>
            </category>
          </xml>
        `;
      case 'Operators':
        return `
          <xml>
            <category name="Operators" colour="#59C059">
              <block type="operators_pick_random"></block>
              <block type="operators_equals"></block>
              <block type="operators_and"></block>
              <block type="operators_or"></block>
              <block type="operators_not"></block>
              <block type="operators_join"></block>
              <block type="operators_letter_of"></block>
              <block type="operators_length"></block>
              <block type="operators_contains"></block>
              <block type="operators_mod"></block>
              <block type="operators_round"></block>
              <block type="operators_abs"></block>
            </category>
          </xml>
        `;
      case 'Variables':
        return `
          <xml>
            <category name="Variables" colour="#FF8C1A">
              <block type="lists_my_variable"></block>
              <block type="lists_set_variable"></block>
              <block type="lists_change_variable"></block>
              <block type="lists_show_variable"></block>
              <block type="lists_hide_variable"></block>
            </category>
          </xml>
        `;
      case 'Lists':
        return `
          <xml>
            <category name="Lists" colour="#FF661A">
              <block type="lists_list"></block>
              <block type="lists_add"></block>
              <block type="lists_delete"></block>
              <block type="lists_delete_all"></block>
              <block type="lists_insert"></block>
              <block type="lists_replace"></block>
              <block type="lists_get"></block>
              <block type="lists_index_of"></block>
              <block type="lists_length"></block>
              <block type="lists_contains"></block>
              <block type="lists_show"></block>
              <block type="lists_hide"></block>
            </category>
          </xml>
        `;
      default:
        return `<xml></xml>`;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Blockly Playground</h2>
      <div
        ref={blocklyDiv}
        style={{
          height: '500px',
          width: '900px',
          border: '2px solid #ddd',
          backgroundColor: 'white',
        }}
      />
    </div>
  );
};

const categories = [
  { name: 'Motor', color: '#4C97FF', icon: '🚗' },
  { name: 'Events', color: '#FFC909', icon: '🎉' },
  { name: 'Sound', color: '#CF63CF', icon: '🎵' },
  { name: 'Control', color: '#FFAB19', icon: '🎮' },
  { name: 'Looks', color: '#9966FF', icon: '👀' },
  { name: 'Sensing', color: '#5CB1D6', icon: '📡' },
  { name: 'Operators', color: '#59C059', icon: '➕' },
  { name: 'Variables', color: '#FF8C1A', icon: '📊' },
  { name: 'Lists', color: '#FF661A', icon: '📜' },
];

const BlocklyWithIcons = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '100px', backgroundColor: '#f0f0f0', padding: '10px' }}>
        {categories.map((category) => (
          <div
            key={category.name}
            style={{
              marginBottom: '10px',
              cursor: 'pointer',
              textAlign: 'center',
              padding: '10px',
              backgroundColor: selectedCategory === category.name ? category.color : '#ddd',
              borderRadius: '5px',
            }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span style={{ fontSize: '24px' }}>{category.icon}</span>
            <div style={{ fontSize: '12px', marginTop: '5px' }}>{category.name}</div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        {selectedCategory && <BlocklyComponent selectedCategory={selectedCategory} />}
      </div>
    </div>
  );
};

export default BlocklyWithIcons;