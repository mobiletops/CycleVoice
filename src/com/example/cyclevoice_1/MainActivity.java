package com.example.cyclevoice_1;

import org.apache.cordova.DroidGap;



import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

public class MainActivity extends DroidGap
{

	@Override
	public void onCreate(Bundle savedInstanceState) 
	{
		 // TODO Auto-generated method stub
		   super.onCreate(savedInstanceState);
		  /* super.setIntegerProperty("splashscreen", R.drawable.splash_screen);*/
		   super.loadUrl("file:///android_asset/www/main.html",5000);
	}
}
