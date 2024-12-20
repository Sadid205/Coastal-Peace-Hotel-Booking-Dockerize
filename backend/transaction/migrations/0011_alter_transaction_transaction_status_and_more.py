# Generated by Django 5.1.1 on 2024-10-22 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0010_alter_transaction_transaction_status_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='transaction_status',
            field=models.CharField(choices=[('Failed', 'Failed'), ('Pending', 'Pending'), ('Success', 'Success')], default='Success', max_length=20),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='transaction_types',
            field=models.CharField(choices=[('Deposit', 'Deposit'), ('Withdraw', 'Withdraw'), ('Booking', 'Booking')], default='Deposit', max_length=20),
        ),
    ]
